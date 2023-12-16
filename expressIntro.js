const express=require("express");
const app=express()

app.get('/cats',(req,res)=>{
    res.send("meow!!")

})

app.get('/r/:cxf/:postID',(req,res)=>{
    const {cxf,postID} = req.params;
    res.send(`<h1>this is a ${cxf} reddit by ${postID}</h1>`)

})

app.get('/search',(req,res)=>{
    const{q}=req.query;
    res.send(`<h1>serach result for:${q}!!`)
})
// app.use((req,res)=>{
//     console.log("use it");
//     //res.send("this is a response")
    
//     res.send('<h1>This is my header</h1>')
// })

app.get('*',(req,res)=>{
    res.send("I do not know this path")
})
app.listen(8080,()=>{
    console.log("listening on port 8080")
})
