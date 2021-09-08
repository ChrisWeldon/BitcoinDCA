var express = require('express')
var router = express.Router();
var cron = require('node-cron');

const database  = require('../database')
const { User, Task } = database.models

const activeTasks = {
}

class TaskManager{
    constructor(){
        this.tasks = {}
    }

    addTask(task){
        // Do the scheduling and parsing here
        this.tasks[task.id] = cron.schedule('* * * * *', () =>  {
            // run buy method here
            console.log('RUNNING CRON: ' + task.id + ' - ' + task.title);
        });
        return task
    }

    pauseTask(id){
        this.tasks[id].stop();
    }

    startTask(id){
        this.tasks[id].start();
    }

    deleteTask(id){
        this.tasks[id].destroy();
        delete this.tasks[id];
    }

}

const cron_manager = new TaskManager();

// define the about route
router.get('/', async function(req, res){
    let user = await User.findOne(
        {
            where: { id: req.user.id },
            include: Task
        })
        .then(function(user){
            res.json(user.Tasks.map((task)=>task.toJSON()))
        })
        .catch((err) => res.json({err}))
});

router.post('/', async function(req, res){
    // TODO: Task validators
    console.log(req.user)
    Task.create({
            ...req.body,
            UserId: req.user.id
        })
        .then((task)=>cron_manager.addTask(task))
        .then((task)=>res.json(task.dataValues))
        .catch((err)=>res.json({ message: err }))
});

router.delete('/:taskId', async function(req, res){
    Task.destroy({
        where: {
            UserId: req.user.id,
            id: req.params.taskId
        }
    })
    .then((x)=>res.json(x))
    .catch((err)=>res.json({ message: err }))
});

module.exports = router
