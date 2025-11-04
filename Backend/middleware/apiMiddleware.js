

const apiMiddleware = (req,res,next)=>{
   if (req.headers.auth == process.env.AUTH_KEY){
     next()
    
    
   }else{
    res.send({error:'auths failed'})
   }

}


module.exports = apiMiddleware