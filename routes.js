const fs = require('fs');

const requestHeadler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === "/"){
        res.write('<html>');
        res.write('<head><title>My first name</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end(); 
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedbody  = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            // console.log(parsedbody);
            fs.writeFile('message.txt', message,(err)=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });   
        });                
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first name</title></head>');
    res.write('<body><h1>Hello from my node.js server</h1></body>');
    res.write('</html>');
    res.end();  
}

// module.exports = requestHeadler;

// module.exports = {
//     handler: requestHeadler,
//     someText: 'some hard coded test'    
// };

// module.exports.handler = requestHeadler;
// module.exports.someText = 'some hard coded text';

exports.handler = requestHeadler;
exports.someText = 'some hard coded text';


