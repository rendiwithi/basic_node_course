const logger = (req,res,next)=>{
    const method = req.method
    const path = req.path
    const date = new Date().getFullYear()
    console.log(`${method} ${path} ${date}`);
    next()
}

module.exports = logger