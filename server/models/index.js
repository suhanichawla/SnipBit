const mongoose=require("mongoose")
mongoose.set("debug",true)
mongoose.Promise=Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codepen",{
    keepAlive:true,
    // useMongoClient:true
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.User=require("./user")