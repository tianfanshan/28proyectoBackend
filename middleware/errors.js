const handleValidationError = (err,res)=>{
    let errors = err.errors.map(el=>el.message);
    if(errors.length > 1){
        let chain = "";
        for (let i = 0; i < errors.length; i++){
            chain += errors[i] + " || ";
        }
        const string = chain.slice(0,-4);
        res.status(400).send({messages:string});
    }else{
        res.status(400).send({messages:errors});
    }
}

const typeError = (err,req,res,next)=>{
    const errOrigin = err.origin
    if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError'){
        return err = handleValidationError(err,res);
    }else
        if(errOrigin === 'User'){
            res.status(500).send('There was a problem with create user');
        }else{
            res.status(500).send('There was a problem with creating product');
        }
}

module.exports = {typeError};