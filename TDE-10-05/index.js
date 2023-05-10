const express = require ("express");

const server = express();

let products = [{
    Id:01,
    name:"iPhone 14 Pro Max",
    description:"iPhone 14 Pro Max de 128gb com 3 cameras incriveis",
    isDone: true,
},
{
    Id:02,
    name: "MacBook Pro M2",
    description: "MacBook Pro com chip M2 e 512gb de ssd",
    isDone: false,
},
{
    id:03,
    name: "iPad Pro",
    description: "iPad Pro super rapido e util para seu dia a dia",
    isDone: true,
}
]

server.get("/products",(req,res)=>{
    res.json({
        products
    })
})

const port = 1010;
server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

