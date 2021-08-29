var express = require('express')
var router = express.Router()

const database  = require('../database')
const { User, Task } = database.models


// define the about route
router.get('/', async function(req, res){
    let user = await User.findOne({ where: { id: req.user.id } })
    user.getTasks()
        .then(function(tasks){
            res.json(tasks.map((task)=>task.dataValues))
        })
        .catch(function(err){
            console.log(err)
            res.json({ message: 'Failure to retrieve tasks' })
        })
});

router.get(
  '/example',
  (req, res, next) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token
    })
  }
);;

router.post('/', function(req, res, next){
        next()
    }, async function(req, res){
    // Task validators
    Task.create({
            ...req.body
        })
        .then((task)=>task.setUser(req.user.id))
        .then((task)=>res.json(task.dataValues))
        .catch((err) => res.json({ message: err }))
});

module.exports = router
