const express = require('express');
const router = express.Router();
const loginService = require('../service/login');

const User = require('../models/users');

router.post('/register',async(req,res)=>{
  try{
    let email = req.body.email;
    let password  = req.body.password;
    const user = await User.create({
      email: email,
      password:password,
      name:req.body.name
    });
    res.send(user);
  }catch(err) {
    res.status(400).send({ error: err });
  }
});
router.post('/login',async(req,res)=>{
  try{
    let email = req.body.email;
    let password  = req.body.password;
    const user =  await User.find({$and:[{email: email},{password:password}]});
    res.status(200).send({data:user[0],msg:"successful"});
  }catch(err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;