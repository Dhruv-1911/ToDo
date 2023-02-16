
const data=[];


module.exports=(app)=>{

    app.get('/todo',(req,res)=>{
        res.render('todo',{todos: data});
    });

    app.post('/todo',(req,res)=>{
            data.push(req.body); 
            // res.render(data,{todos: data})
            res.json(data);
          
    });

    app.delete('/todo/:item',(req,res)=>{
        console.log("delete");
        data = data.filter((todo)=>{
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
        // console.log(data);
        res.json(data);
    });
};