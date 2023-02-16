const express = require('express');
const todoController =require('./controllers/todocontroller');
const app = express();

//view file
app.set('view engine','ejs');

//satatic file

app.use(express.static('./public'));
// app.use(express.favicon(__dirname + './public')); 

todoController(app);

app.listen(3000,()=>{
    console.log("listening.......");
});



