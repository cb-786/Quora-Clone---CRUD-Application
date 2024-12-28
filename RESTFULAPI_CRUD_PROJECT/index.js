const { name } = require("ejs");
const express = require("express");
var methodOverride = require('method-override')
const path = require("path");
const app = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));

const port = 8080;

let posts = [
    {
    
      name: "naman kundra",
      content: "hello world is boring",
      date: "2022-01-01"


    },

    {
              name: "payal batra",
              content: "no hate",
              date: "2022-01-02"

    },

    {
                name: "diya thapar",
                content: "we do not care",
                date : `2022-01-03`
    }
]


app.get("/",(req,res)=>{
    res.send("server is working well");
})

app.get("/posts/new",(req,res)=> {
    res.render("new");
})

app.post("/posts",(req,res)=> {
    const { name, content ,date} = req.body;
    const newPost = {
        name,
        content,
        date
        }
        posts.push(newPost);
        res.redirect("/posts");
    
})

app.get("/posts/:id",(req,res)=> {
    const id = req.params.id;
    const obj = posts[id];
    res.render("specific",{ obj });
})

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts[id];
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
  });
 
  app.get("/posts/:id/edit",(req,res)=> {
    let { id } = req.params;
    let post = posts[id];
    res.render("edit",{post});
})

app.get("/posts",(req,res)=>{
    res.render("index",{posts});
})

app.delete("/posts/:id",(req,res)=> {
    let { id } = req.params;
    posts.splice(id,1);
    res.redirect("/posts");
})




app.listen(port,(req,res)=> {
    console.log(`Server is running on port ${port}`);   
})




