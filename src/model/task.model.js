export default class TaskModel{
    constructor(id, title, description, createdBy){
        this.id=id;
        this.title=title;
        this.description=description;
        this.createdBy=createdBy;
    }
    static getAll(){
        return tasks;
    }
    static add(title, description, createdBy){
        const newTask= new TaskModel (tasks.length + 1, title, description, createdBy);
        tasks.push(newTask);
        console.log(newTask);
        return newTask;
    }
    static getById(id){
        return tasks.find((p)=> p.id == id);
    }
    static deleteById(id){
        const index = tasks.findIndex((task)=> task.id == id);
        console.log(index);

        if(index != -1){
            const deletedTask = tasks.splice(index, 1)[0]; 
            console.log(deletedTask);
            return deletedTask;
        }else{
            return null;
        }
    }
}

var tasks = [
    new TaskModel (
        "1",
        "Daily Routine for Students",
        "Wake up Early. Exercise daily. Revise chapters before going to school.Make a chart of math identities. Keep room clean. Maths exercise on Cuemath. At Night, Go to bed early ",
        "Supriya Haldar"
    ),
    new TaskModel (
        "2",
        "Revise chapters After",
        "your Doubts will be easily resolved. Complex concepts will be easier to grasp. In Placement, performance will improve drastically.",
        "Solaj Mondal",
    )
];