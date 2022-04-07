// creating server

// console.log("hello");


const express=require("express");

const server=express();

const middleWare1=(req,res,next)=>{
    console.log("hello this is middleware1");
    next();
}


const middleWare2=(req,res,next)=>{
    console.log("hello this is middleware2");
    next();
}

server.use(middleWare1);

server.get("/",(request,response)=>{
    response.send("hello world")
})
server.get("/user",middleWare2,(request,response)=>{
    response.send("<h1>hello</h1>")
})
server.get("/run",(request,response)=>{
    response.send({name:"chandu"})
})

server.listen(3001,()=>{
    console.log("we are running server")
});




//HTTP METHODS
//CRUD:CREATE , READ , UPDATE, DELETE