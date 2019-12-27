const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../../models/User.js");

// @route   POST api/auth
// @desc    Login user
// @access  Public

router.post("/", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    User.findOne({ email: email }).then(user => {
        if (!user) {
            return res.status(400).json({ msg: "User does not exists" });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch)
                return res.status(400).json({ msg: "Invalid credentials" });
            jwt.sign(
                { id: user.id },
                config.get("jwtSecret"),
                { expiresIn: 2592000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token: token,
                        user: {
                            id: user.id,
                            fullName: user.fullName,
                            email: user.email
                        }
                    });
                }
            );
        });
    });
});

module.exports = router;
