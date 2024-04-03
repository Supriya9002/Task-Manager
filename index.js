import express from "express"
import path from "path"
import ejsLayout from "express-ejs-layouts"
import TaskController from "./src/controller/task.controller.js"


const server =express();

//setup view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "view"));

server.use(ejsLayout);

//req.body
server.use(express.urlencoded({ extended: true }));

//instance
const taskController = new TaskController;

server.get("/", taskController.homePage);
server.get("/tasks", taskController.getAll);
server.post("/tasks", taskController.postTasks);
server.get("/tasks/new", taskController.addnew);
server.get("/tasks/:id", taskController.postDetails);
server.get("/tasks/:id/delete", taskController.deleteTask);

server.listen(1000, ()=>{
    console.log("Server running port 1000");
})

