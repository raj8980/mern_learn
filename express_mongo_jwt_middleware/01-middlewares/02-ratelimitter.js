const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

app.use(express.json());
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)


function verifyUserRequest(req,res,next){
  console.log(req.headers['user-id'])
  const userId = req.headers['user-id'];
  
  console.log(numberOfRequestsForUser);
  if(numberOfRequestsForUser[userId]){
    const reqCountForUser=numberOfRequestsForUser[userId];
    console.log(reqCountForUser);
    if(reqCountForUser===5){
      return res.status(404).send("request count reached 5 for this user in second");
    }
    numberOfRequestsForUser[userId]=numberOfRequestsForUser[userId]+1;
  }else{
    numberOfRequestsForUser = {  [userId] : 1 };
    
  }
  next();
}


app.get('/user',verifyUserRequest, function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user',verifyUserRequest, function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;