const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

const sequel = require('./database');

var passport = require('passport')
var BasicStrategy = require('passport-http').BasicStrategy;

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
        console.log('strategy called')
        if(username==='yes'){
            console.log('login success')
            return done(null, {name:'Chris'})
        }
        else{
            console.log('login fail')
            return done(null, false, { message: 'Incorrect username.' })
        }
    }
));

const isAuthenticated = function(req,res,next){
   if(req.user)
      return next();
   else
      return res.status(401).json({
        error: 'User not authenticated'
      })

}


// app.post('/login', function(req, res, next) {
//   passport.authenticate('basic', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.send({message:'LOGIN FAILED'}); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.send({message:'LOGIN SUCCESS'});
//     });
//   })(req, res, next);
// });

//
app.post('/login',
    passport.authenticate('basic'),
    function(req, res){
        console.log(req.user)
        res.json(req.user)
    }
);



app.get('/',
    isAuthenticated,
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
