const category = require('../models/category')
const  { Category } = require('../models/category')

const Category={
    Category(req,res){
        category.create({...req.body})
        .then(categor)
    }
}

//// comentariossss