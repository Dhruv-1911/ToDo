const express = require('express');
const todocontroller =require('./controllers/todocontroller.js');
const app = express();

//view file
app.set('view engine','ejs');

//satatic file
app.use(express.static('./public'));
app.use(express.urlencoded({extended:false}));
// app.use(express.favicon(__dirname + './public')); 

todocontroller(app);

app.listen(3000,()=>{
    console.log("listening.......");
});