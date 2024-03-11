// app.get("/", function(req, res){
//     const johnKidneys = users[0].kidneys;
//     const numberOfKidneys = johnKidneys.length;
//     let numberOfHealthyKidneys = 0;
//     for(i=0; i<johnKidneys.length; i++){
//         if(johnKidneys[i].healthy){
//             numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
//         }
//     }
//     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnhealthyKidneys
//     })

// });

// app.post("/", function(req, res){
//     const isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy: isHealthy,
//     })
//     res.json({
//         msg: "Done"
//     })
// });

// app.put("/", function(req, res){
//     for(let i = 0; i<users[0].kidneys.length; i++){
//         users[0].kidneys[i].healthy = true;
//     }
//     res.json({});
// });

// app.delete("/", function(req, res){
//     const newKidneys = [];
//     for(let i = 0; i<users[0].kidneys.length; i++){
//         if(users[0].kidneys[i].healthy){
//             newKidneys.push({
//                 healthy: true   
//             })
//         }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({
//         msg: "Deleted",
//     })
// });

// 3. POST /todos - Create a new todo item
//     Description: Creates a new todo item.
//     Request Body: JSON object representing the todo item.
//     Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
//     Example: POST http://localhost:3000/todos
//     Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
//   4. PUT /todos/:id - Update an existing todo item by ID
//     Description: Updates an existing todo item identified by its ID.
//     Request Body: JSON object representing the updated todo item.
//     Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
//     Example: PUT http://localhost:3000/todos/123
//     Request Body: { "title": "Buy groceries", "completed": true }
    
//   5. DELETE /todos/:id - Delete a todo item by ID
//     Description: Deletes a todo item identified by its ID.
//     Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
//     Example: DELETE http://localhost:3000/todos/123
