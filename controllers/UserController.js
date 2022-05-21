const { User } = require('../models/index')

const UserController={
    create(req,res){
        User.create({...req.body})
        .then(user=>res.status(201).send({message:'User created!',user}))
        .catch(console.error)
    }
}

module.exports = UserController;