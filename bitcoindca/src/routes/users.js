var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken');
const database  = require('../database')
const { User, Task } = database.models
const passport = require('passport')


router.use(async function(req, res, next){ // FIXME: this creates a new user on every request
    User.create({
        username:'chris',
        password: 'pass'
    })
        .then((usr)=>next())
        .catch((err)=>next())
})

router.post('/register', async function(req, res){
    //TODO verify that it is a good username and password
    // TODO send email, with a 1 time use key that then when verified create's the user
    User.create({
            username: req.body.user,
            password: req.body.pass
        })
        .then(model => res.json(model.toJSON()))
        .catch(error => {
            if(error.name==='SequelizeUniqueConstraintError')
                res.json({error:'Username already taken.'})
            else
                res.json({error:'Failed to register user'})
        })
    })


router.post('/login', passport.authenticate('basic', { session:false }),
    async (req, res, next) => {
        try {
            user = req.user
            const body = {
                id: user.dataValues.id,
                name: user.dataValues.username
            };
            const token = jwt.sign({ user: body }, 'TOP_SECRET');
            return res.json({
                ...user.dataValues,
                token
            });

        } catch (error) {
            return next(error);
        }
    }
);

router.post('/logout', function(req, res){
  //TODO: destroy the tokens authority
  res.end()
});

router.get('/users',
    passport.authenticate('jwt', { session:false }), function(req, res){
    User.findAll()
        .then(arr => arr.map(m => m.toJSON()))
        .then(arr => res.json(arr))
        .catch(error => res.json({error}))
});

module.exports = router;
