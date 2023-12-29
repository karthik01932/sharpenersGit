const http = require('http');
const routes = require('./routes')
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(4000);

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     // console.log(req.url, req.method, req.headers);
//     // process.exit();   
//     const url = req.url;
//     const method = req.method;
//     if(url==="/"){
//         // const filePath = path.join(__dirname,"message.txt");
//         fs.readFile("message.txt ",{encoding: "utf-8"},(err,data)=>{
//             if(err){
//                 console.log(err);
//             }
//             console.log(`data from file` + data);
//             res.write('<html>');
//             res.write('<head><title>Enter Message</title></head>');
//             res.write(`<body>${data}</body>`);
//             res.write(`<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">send</button></form></body>`);
//             res.write('</html>');
//             return res.end(); 
//         })
        
//     }else if(url === "/message" && method === "POST"){
//         const body = [];
//         req.on("data",(chunk)=>{
//             // console.log(chunk);
//             body.push(chunk);
//         });
//         return req.on('end',()=>{
//             const parsedbody  = Buffer.concat(body).toString();
//             const message = parsedbody.split('=')[1];
//             // console.log(parsedbody);
//             fs.writeFile('message.txt', message,(err)=>{
//                 if(err){
//                     console.log(err)
//                 }
//                 console.log(`inside fs.writefile`);
//                 res.statusCode = 302;
//                 res.setHeader('Location',"/");
//                 return res.end();
//             });   
//         });                
//     }else{
//         res.setHeader('Content-Type','text/html');
//         res.write('<html>');
//         res.write('<head><title>My first name</title></head>');
//         res.write('<body><h1>Hello from my node.js server</h1></body>');
//         res.write('</html>');
//         res.end();
//     }  
// });

// server.listen(4000);