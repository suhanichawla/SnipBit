const mongoose=require("mongoose")
mongoose.Promise=Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codepen",{
    keepAlive:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Connected to MongoDB"))
.catch((e)=>console.log(e))


module.exports.User=require("./user")
module.exports.Snip=require("./snip")