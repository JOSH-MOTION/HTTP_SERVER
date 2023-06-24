const express = require("express");

const server = express();

//request handling methods
const handleAllTypesOfRequests = (req,res) => {
    res.send("Respond from server.use")
}

server.use('/profile', handleAllTypesOfRequests);
server.get('/login', (req, res) =>  res.send('hello this is the login page'))

server.listen(3000, "127.0.0.1", ()=>  console.log("server is ready to accept request"));