const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//TODO DELETE USER

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            console.log(hash);
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,

            });
            user.save().then(
                () => {
                    console.log("User saved");
                    res.status(201).json({
                        message: 'User added successfully!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    );
};


exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found!')
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Incorrect password!')
                        });
                    }
                    const token = jwt.sign(
                        { userId: user.id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' });
                    res.status(200).json({
                        userId: user.id,
                        token: token
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );
}