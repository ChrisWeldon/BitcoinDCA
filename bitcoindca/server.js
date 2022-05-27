const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

const database  = require('./src/database')
const { User, Task } = database.models

const app = express()
const port = 5000;

//app.use(session({ secret: "bitcoin" }));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(passport.session());
app.use(passport.initialize());

require('./auth')
const { TaskRouter, AuthRouter } = require('./src/routes')

app.use(cors())

app.use('/auth', AuthRouter) // Gotta pass in passport cause it handles the Strategies
app.use('/tasks', passport.authenticate('jwt', { session: false }), TaskRouter)

app.get('/',
    async function(req, res){
        try {
            await database.authenticate();
            res.send('<h1>Hello World</h1> <br> Sequel Database connected');
            console.log('Connected to the database');
        } catch (error) {
            res.send('<h1>Hello World</h1> <br> Sequel Database not connected')
            console.error('Unable to connect to the database:', error);
        }
    }
);


app.use(function (err, req, res, next) {
    console.log('Error Handler called: ', err)
    res.status(400).send(err.message)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
