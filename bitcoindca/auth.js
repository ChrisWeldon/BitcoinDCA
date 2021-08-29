const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const database  = require('./src/database');
const { User, Task } = database.models;

console.log('Initializing')

passport.use( new JWTstrategy(
    {
        secretOrKey: 'TOP_SECRET',
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken() //ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
        console.log('JWT attempt')
        try {
            console.log(token.user)
            return done(null, token.user);
        } catch (error) {
            console.log(error)
            done(error);
        }
    }));

passport.use( new BasicStrategy(
    function(username, password, done) {
        console.log('Basic attempt')
        User.findOne({ where: { username: username } })
            .then(function(user){
                if(user===null){
                    console.log("no user")
                    return done(null, false, { message: 'No user of that name.' })
                }else if (user.dataValues.password!==password) {
                    console.log("wrong password")
                    return done(null, false, { message: 'Incorrect password.' })
                }
                console.log(user)
                return done(null, user)
            })
            .catch(error => done(error))
    }
));
