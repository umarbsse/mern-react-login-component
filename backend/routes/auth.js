const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = "UMERISNOTaGOODB$Y"

//Route 2: Authenticate a User using : POST "/api/auth/login". No required login
router.post(
    "/login",
    [
        body("email", "Enter a valid email").isEmail().escape(),
        body("password", "Password can not be blanked").exists()
    ],
    async (req, res) => {
            let success = false;
        
        
        

            //If ther are error return bad request and the errors

            const errors = validationResult(req);

            //IF VALIDATION FAILED
            if (!errors.isEmpty()) {
                res.status(400).send({success,  errors: errors.array() });
            }
            

        try {

            const {email,password}=req.body;

            let user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({success, error:"Please try to loging with correct credentials"});
            }
            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res.status(400).json({success, error:"Please try to loging with correct credentials"});
            }


            
            const data ={user:{id:user.id}}


            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;


            res.json({ success, authToken});
            
        } catch (error) {
            //console.error(error.message);
            res.status(500).send("Internal Server Error");
        }

    }
);




module.exports = router;