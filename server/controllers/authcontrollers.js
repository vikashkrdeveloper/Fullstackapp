const authcontrollers=(req,res)=>{
res.status(200).send(req.rootUser);
}

module.exports=authcontrollers;