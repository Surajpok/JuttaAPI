const express = require('express');
const router = express.Router();

router.get("/usertest", (req,res) => {
    res.send("user test is succesful");
});

router.get("/userposttest", (req,res) => {
    const username = req.body.username;
    res.send("your username is" + username);
});

module.exports = router