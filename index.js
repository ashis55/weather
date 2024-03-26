const express=require('express');
const path =require('path');
const app = express();
const hbs=require("hbs");
const port=3000;

const static=path.join(__dirname,"/views");
const statichbs=path.join(__dirname,"/views");

app.set('view engine','hbs');

hbs.registerPartials(statichbs);
app.use(express.static(static));

app.get("",(req,res)=>{
    res.render('index');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("*",(req,res)=>{
    res.render('error');
})
app.listen(port,()=> {
 console.log(`listening the port ${port}`);
})