const express = require("express");

const server = express();

//request handling methods
const handleAllTypesOfRequests = (req,res) => {
    res.send("Respond from server.use")
}

const handleProfilePutRequestType = (req, res) => {
    res.send('Responded to profile request with method of value put')
}
server.post('/profile', handleAllTypesOfRequests);
server.get('/login', (req, res) =>  res.send('hello this is the login page'));
server.put('/profile', handleProfilePutRequestType);
server.patch('/signup', (req, res) => res.send('Welcome to the signup page'))

server.listen(3000, "127.0.0.1", ()=>  console.log("server is ready to accept request"));