const express = require('express');
const registerController = require('../controllers/auth.controllers');
const { ConnectionStates } = require('mongoose');
const router = express.Router();

router.post('/register', registerController.register);
router.get("/test", (req, res) => {
    console.log("cookies", req.cookies);
    res.json({ "message": "Test route working",
     cookies: req.cookies
    })
    
    })  ;
module.exports = router;