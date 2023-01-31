module.exports = (req,res,next)=>{
    try{
    let {flag} = req.query;
    // console.log(flag);
    if(flag=="true"){
       next()
    }
    else{
       return res.send("some error")
    }

}
catch(error){
    next(error)
}
}  