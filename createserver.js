//program to build a simple web server
const http=require('http'); //import http module

const server = http.createServer((req,res)=>{ //create server
    res.write("This is the response from the server"); //send response
    res.end();
})

server.listen((3000),()=>{
    console.log("Server created succesfully!!");
})
