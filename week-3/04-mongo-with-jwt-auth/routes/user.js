const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} =require("../config");
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

/**- POST /users/signup
  Description: Creates a new user account.
  Input: { username: 'user', password: 'pass' }
  Output: { message: 'User created successfully' }*/
// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExist = await User.findOne({username : username, password : password});
    if(userExist){
        res.status(400).json({"message" : "username is already exist"});
    }
    User.create({
        username : username,
        password : password
    });

    res.json({
        "message" : "User created successfully"
    });
});

router.post('/signin',async(req,res)=>{
    const username= req.body.username;
    const password = req.body.password;

    const userExist = await User.findOne({username:username, password :password});

    if(userExist){
        const token=jwt.sign({username:username},JWT_SECRET);
        res.json({"token":token});
    }else{
        res.json({"message":"username or password is invalid"});
    }
});

/**
 * - GET /users/courses
  Description: Lists all the courses.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
 */
router.get('/courses',userMiddleware, async (req, res) => {
    const username = req.headers['username'];
    
    const courses = await Course.find();
    if(courses){
        res.json({courses : courses});
    }else{
        res.json({courses: []});
    }

});

/**
 * - POST /users/courses/:courseId
  Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { message: 'Course purchased successfully' }

 */
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
        const courseId = req.params.courseId;
        console.log("courseId : ",courseId);
        const course = await Course.findOne({_id:courseId});
        console.log("course : ",course);
        const username= req.username;
        console.log("username :",username);
        const query = {username : username};
        const update = {
            $push : {purchasedCourses: courseId}
        }

        if(course){
            const result = await User.updateOne(query,update);
            console.log("result :",result);
            res.json({
                "msessage" : "Course purchased successfully"
            })
        }else{
            res.send({
                "message" : "No course has been found with that course id"
            })  
        }
           
});

/**
 * - GET /users/purchasedCourses
  Description: Lists all the courses purchased by the user.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

 */
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.username
    const userDtls = await User.findOne({username:username}); 

    const courses = await Course.find({
        _id: {
            "$in": userDtls.purchasedCourses
        }
    });
    if(userDtls){
       return res.send({
            "purchasedCourses" : courses
        });
    }else{
       return res.send({
            "purchasedCourses" : ""
        })
    }
    
});

module.exports = router