const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser= await Admin.findOne({username : username});
    if(existingUser){
        return res.status(400).send("username is already exists");
    }

    await Admin.create({
        username : username,
        password : password
    });

    res.json({
        "msg" : "User successfully signed up"
    })
});
/**  POST /admin/courses
  Description: Creates a new course.
  Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  Output: { message: 'Course created successfully', courseId: "new course id" }*/
router.post('/courses', adminMiddleware, async (req, res) => {
    const course=req.body;
    const newCourse = await Course.create({
        title : course.title,
        description : course.description,
        price : course.price,
        imageLink : course.imageLink,
        published : true
    });

    res.json({
        "message" : "Course created successfully",
        "courseId" : newCourse._id
    })

});

/**
 * GET /admin/courses
  Description: Returns all the courses.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
 */

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find();
    res.json({ courses : courses});
});

module.exports = router;