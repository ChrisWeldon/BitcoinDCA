const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const database  = require('./src/database');
const { User, Task } = database.models;

passport.use( new JWTstrategy(
    {
        secretOrKey: 'TOP_SECRET',
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken() //ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
        try {
            return done(null, token.user);
        } catch (error) {
            console.log(error)
            done(error);
        }
    }));

passport.use( new BasicStrategy(
    function(username, password, done) {
        User.findOne({ where: { username: username } })
            .then(function(user){
                if(user===null){
                    return done(null, false, { message: 'No user of that name.' })
                }else if (user.dataValues.password!==password) {
                    return done(null, false, { message: 'Incorrect password.' })
                }
                return done(null, user)
            })
            .catch(error => done(error))
    }
));
