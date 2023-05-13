import express from "express"
import bcrypt from "bcrypt"
import {User} from "../models/User.js"
import passport from "passport"
import LocalStrategy from "passport-local"


const router = express.Router()

//---------------------------------------------------------------------------
//login
router.get("/login", function(request, response, next) {

    response.render("login.ejs", { message: request.flash('error') });
})

router.post("/login", passport.authenticate("local",{
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true
}))

//---------------------------------------------------------------------------
//register
router.get("/signup", function(request, response, next) {
    
    
    response.render("bespokeFitness.ejs");
})

router.post("/signup",  async function(request, response, next) {
    let hashPassword = await bcrypt.hash(request.body.password, 10)
    let name = request.body.username
    const user = await User.create({
        username: name,
        password: hashPassword
    })
    user.save().then(function(err) {
        if (err) { 
            return next(err); 
        }
    
        request.login(user, function(err) {
            if (err) { 
                return next(err); 
            }
        })   
    })
    response.redirect("/login");
});

//---------------------------------------------------------------------------
//logout
router.get("/logout", function (request, response, next){
    request.logout(function(err){
        if(err){
            return next(err)
        }
        response.redirect("/login")
    })
})

export {router}