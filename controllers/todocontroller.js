
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://dhruv:dhruv@todo.txhgfdd.mongodb.net/?retryWrites=true&w=majority")


const todoSchema = new mongoose.Schema({
    item: String
});

const Todo = mongoose.model('Todo',todoSchema);
// const data=[];


const urlencodedParser =bodyParser.urlencoded({extended: false});

module.exports=(app)=>{

    app.get('/todo',(req,res)=>{
        Todo.find({},(err,data)=>{
            if(err) throw err;
            res.render('todo',{todos: data});
        })
    });

    app.post('/todo',urlencodedParser,(req,res)=>{
        Todo(req.body).save((err,data)=>{
            if(err) throw err;
            // res.render('todo',{todos:req.body})
            console.log(req.body);
           
            res.json(data);
        }) 
    });


    app.delete('/todo/:item',(req,res)=>{
        console.log(req.params.item);
        Todo.find({item: req.params.item.replace(/item/g," ")}).deleteMany((err,data)=>{

            if(err) throw err;
            res.json(data);
        });
      
    });
}




