const express = require("express");
const app = express();

const todos = [
    {
        id: "123",
        title: "abc",
        completed: "false",
        description : "Lorem Ipsum"
    },
    {
        id: "131",
        title: "hello",
        completed: "false",
        description : "Lorem Ipsum"
    }
];

app.use(express.json());


app.get("/todos", function(req, res){
    res.status(200).json(todos);
});

app.get("/todos/:id", function(req, res){
    const specificTodoId = req.params.id;
    const specificTodo = todos.find(todo => todo.id === specificTodoId);
    
    if (specificTodo) {
        res.status(200).json(specificTodo);
    } else {
        res.status(404).json({ msg: "Not Found" });
    }
});

app.post("/todos", function(req, res){
    todos.push({
        id: req.body.id,
        description: req.body.description,
        title: req.body.title,
        completed: false
    });

    res.status(200).json({
      msg: "Todo Added",
    });
});

app.put("/todos/:id", function(req, res){
    const specificTodoId = req.params.id;
    for(let i = 0; i<todos.length; i++){
        if(specificTodoId == todos[i].id){
            todos[i].completed = true;
        }
    }
    res.status(200).json({});
});

app.delete("/todos/:id", function(req, res){
    const specificTodoId = req.params.id;
    const todoIndex = todos.findIndex(todo => todo.id === specificTodoId);
    if(todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(200).json({
            msg: "Todo Item was found and deleted"
        });
    } else {
        res.status(404).json({
            msg: "Not Found"
        });
    }
});

app.use((req, res, next) => {
    res.status(404).send();
  });

app.listen(3000);