const express = require('express');
const fs = require("fs");
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send(`
    <form action="/" onsubmit= "document.getElementById('username').value = localStorage.getItem('username')" method = "POST">
        <input id="message" name="message" type="text" placeHolder="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">send</button>
    </form>`)
})

router.post("/",(req,res,next)=>{
    console.log(`${req.body.username}:${req.body.message}`);

    fs.writeFile("username.txt",`${req.body.username}: ${req.body.message}`,{flag: 'a'}, (err)=>{
        err ? console.log(err) : res.redirect("/");

    })

    // res.send(`<h5>${req.body.username}:${req.body.message}</h5>`);
    
    // console.log(`${req.body.username}:${req./body.message}`);
    // res.redirect('/');
});

module.exports = router;