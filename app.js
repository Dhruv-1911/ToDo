const express = require('express');
const todoController =require('./controllers/todocontroller');
const app = express();
const favicon = require('serve-favicon');
const path = require('path')

//view file
app.set('view engine','ejs');

//satatic file

app.use(express.static('./public'));
// app.use(express.favicon(__dirname + './public')); 
app.use(favicon(path.join(__dirname,'public', 'assets','icon.png')))

todoController(app);

app.listen(3000,()=>{
    console.log("listening.......");
});
