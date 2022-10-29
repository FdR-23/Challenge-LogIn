const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;


passport.use('local-register', new LocalStrategy({
    usernameFiel: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {

}))