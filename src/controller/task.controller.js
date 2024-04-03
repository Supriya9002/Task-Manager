import TaskModel from "../model/task.model.js"

export default class TaskController{
    homePage(req, res){
        res.render("newTask");
    }
    getAll(req, res){
        const tasks = TaskModel.getAll();
        res.render("tasks", {tasks: tasks});
    }
    postTasks(req, res){
        const {title, description, createdBy} = req.body;
        console.log(req.body);
        const newTask = TaskModel.add(title, description, createdBy);
        res.render("taskDetails", {task: newTask});
    }
    addnew(req, res){
        res.render("newTask");
    }
    postDetails(req, res){
        const id = req.params.id;
        console.log(id);
        const getId= TaskModel.getById(id);
        console.log(getId);
        if(getId){
            res.render("taskDetails", {task: getId});
        }
        else{
            res.status(400).send("Tasks id Not found");
        }
    }
    deleteTask(req, res){
        const id = req.params.id;
        console.log(id);
        const deletedTask = TaskModel.deleteById(id);

        if(deletedTask){
            res.redirect("/tasks");
        }else{
            res.status(401).send("Task not found");
        }
    }

    
}