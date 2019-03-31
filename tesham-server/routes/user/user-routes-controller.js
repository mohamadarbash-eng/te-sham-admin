const User = require('./../../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    postNewUser(req, res, next) {
        const {email, password} = req.body;
        bcrypt.hash(password, 10)
            .then(password => {
                const user = new User({
                    email,
                    password
                });
                user.save().then((account) => {
                    res.status(201).json({
                        message: 'new user account is created',
                        result: account
                    });
                    next();
                }).catch((error) => {
                    res.status(500).json({
                        error
                    });
                    next();
                });
            }).catch((error) => {
            res.status(500).json({
                error
            });
            next();
        });
},
    postUserCredentials(req, res, next) {
        const {email, password} = req.body;
        let userID;
        User.findOne({email: email})
            .then(user => {
                userID = user.id;
                if(!user) {
                    return res.status(401).json({
                       message: `${email} is not found`
                    });
                }
               return bcrypt.compare(password,user.password);

            }).then((result) =>  {
            if(!result) {
                return res.status(401).json({
                    message: `${email} is not found`
                });
            }
            const token = jwt.sign({email, id: userID}, 'secret should be changed', {
                expiresIn: '1h'
            });
            console.log(token);
            res.status(200).json({
                token,
                login: true
            });
            next();
        }).catch((error) => {
            res.status(401).json({
                error
            });
            next();
        });
    }
};

module.exports = userController;


