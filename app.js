const express = require('express');
const todoController =require('./controllers/todocontroller');
const app = express();
const path = require('path')

//view file
app.set('view engine','ejs');

//satatic file

app.use(express.static('./public'));

todoController(app);

app.listen(3000,()=>{
    console.log("listening.......");
})
 
   
