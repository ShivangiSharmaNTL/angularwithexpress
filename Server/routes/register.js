import express from 'express'
import userSchema from '../model/registerSchema';
let router = express.Router();

router.post('/', (req, res)=>{
      
   let objUser = new userSchema({
   	   name : req.body.name,
       email:req.body.email,
       password:req.body.password,
       confpassword:req.body.confpassword      
   });

   objUser.save((error, data)=>{
       if(error){ res.json(error)}
       	else{ res.json(data)}

   })  

});

router.get('/', (req, res)=>{
   userSchema.find({}, (err, data)=>{
         if(err){ res.send(err) }
          else{
            console.log(data)
            res.json(data)
          }

   });

});

export default router;