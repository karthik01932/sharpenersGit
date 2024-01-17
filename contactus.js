const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus' ,(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
    console.log(res.body);
})
router.post('/success',(req,res,next)=>{
    console.log(req.body);
    res.write('<html>');
    res.write('<head><title>Form successfuly filled</title></head>');
    res.write('<body><h1>Form successfuly filled</h1></body>');
    res.write('</html>');
    // res.redirect('/');
    
})

module.exports  = router;