(function(){
    var login;
    login = function(){};
    const User = require('../models/users');
    login.register = async function(req,res){
        let body=req.body;
        try{
            let email = body.email;
            let password  = body.password;
            const user = await User.create({
            email: email,
            password:password,
            name:req.body.name
            });
            res.status(200).send({data:user})
        }catch(err) {
            res.status(400).send({ error: err });
        }
    },
    login.login = async function(req,res){
        let body=req.body;
        try{
          let email = body.email;
          let password  = body.password;
          const user =  await User.find({$and:[{email: email},{password:password}]});
          res.status(200).send({data:user[0],msg:"successful"});
        }catch(err) {
          res.status(400).send({ error: err });
        }
      }
module.exports = login;
}.call(this))