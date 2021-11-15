import express from 'express'
import passport from 'passport'
const app = express()
// const facebookStrategy = require('passport-facebook').Strategy

import {Strategy as facebookStrategy} from 'passport-facebook'

app.set("view engine","svelte")

app.use(passport.initialize());
    app.use(passport.session()); 

passport.use(new facebookStrategy({

    // pull in our app id and secret from our auth.js file
    clientID        : "620526042351092",
    clientSecret    : "232d727c4935d25ecc96ce6461f923a9",
    callbackURL     : "http://localhost:3000/facebook/callback",
    profileFields   : ['id','displayName','name','gender','picture.type(large)','email']

},// facebook will send back the token and profile
function(token, refreshToken, profile, done) {

    console.log(profile)
    return done(null,profile)
}));

export const authenticate = () => passport.authenticate('facebook', { scope : 'email,user_photos' });

passport.serializeUser(function(user, done) {
    done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    return done(null,user)
});

app.get('/profile',(req,res) => {
    res.send("you are authenticated")
})

app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email,user_photos' }));

app.get('/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));
        