const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy;


const { isAuthenticated } = require('./src/middleware')
const { Sequel } = require('./src/database')

database = new Sequel();

const app = express()
const port = 5000;

app.use(session({ secret: "bitcoin" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())

passport.serializeUser(function(user, done) {
  done(null, user.name);
});

passport.deserializeUser(function(name, done) {
  done(null, {name:name});
});


passport.use(new BasicStrategy(
    function(username, password, done) {

        database.User.findOne({ where: { username: username } })
            .then(function(user){
                console.log('FOUNDONE')
                console.log(user)
                if(user===null){
                    console.log('No user')
                    return done(null, false, { message: 'No user of that name.' })
                }else if (user.password!==password) {
                    console.log('wrong pass')
                    return done(null, false, { message: 'Incorrect password.' })
                }
                return done(null, {name:'Chris'})
            })
            .catch(error => done(err))
    }
));


app.post('/login',
    passport.authenticate('basic'),
    function(req, res){
        console.log(req.user)
        res.json(req.user)
    }
);

app.post('/register', async function(req, res){
    console.log(req.body)
    res.json(req.body)
    //TODO verify that it is a good username and password
    database.addUser(req.body.user, req.body.pass)
        .then(model => res.json(model.toJSON()))
        .catch(error => res.json({error}))
});

app.get('/users', isAuthenticated, function(req, res){
    database.User.findAll()
        .then(arr => arr.map(m => m.toJSON()))
        .then(arr => res.json(arr))
        .catch(error => res.json({error}))
});


app.get('/',
    async function(req, res){
        try {
            await sequel.authenticate();
            res.send('<h1>Hello World</h1> <br> Sequel Database connected');
            console.log('Connected to the database');
        } catch (error) {
            res.send('<h1>Hello World</h1> <br> Sequel Database not connected')
            console.error('Unable to connect to the database:', error);
        }
    }
);

app.use(function (err, req, res, next) {
  res.status(400).send(err.message)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
