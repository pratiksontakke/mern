const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");
// const { reviewSchema } = require("../schema.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post(
    "/signup",
    wrapAsync(async (req, res) => {
        try {
            let { username, email, password } = req.body;
            let newUser = new User({
                username,
                email,
            });
            let registeredUser = await User.register(newUser, password);
            console.log(registeredUser);
            req.flash("success", "Welcome to Wonderlust!");
            res.redirect("/listings");
        } catch (e) {
            req.flash("error", e.message);
            res.redirect("/signup");
        }
    })
);

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    wrapAsync(async (req, res) => {
        req.flash("success", "Welcome to back to Wanderlust!");
        res.redirect("/listings");
    })
);

module.exports = router;