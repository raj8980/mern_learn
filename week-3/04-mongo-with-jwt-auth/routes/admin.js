const express = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} =require("../config");
const { Admin, Course } = require("../db");
const router = express.Router();

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
    
});

router.post('/signin',async(req,res)=>{
    const username= req.body.username;
    const password = req.body.password;

    const userExist = await Admin.findOne({username:username, password :password});

    if(userExist){
        const token=jwt.sign({username},JWT_SECRET);
        res.json({"token":token});
    }else{
        res.json({"message":"username or password is invalid"});
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});


module.exports = router;