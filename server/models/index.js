const mongoose=require("mongoose")
// mongoose.set("debug",true)
mongoose.Promise=Promise;
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codepen",{
    keepAlive:true,
    // useMongoClient:true
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connected to mongo"))
.catch((e)=>console.log(e))

// var MongoClient = require('mongodb').MongoClient;

// var uri = "mongodb://SuhaniChawla:<password>@webprojects-shard-00-00.1zfww.mongodb.net:27017,webprojects-shard-00-01.1zfww.mongodb.net:27017,webprojects-shard-00-02.1zfww.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-15o2cr-shard-0&authSource=admin&retryWrites=true&w=majority";
// MongoClient.connect(uri, function(err, client) {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


module.exports.User=require("./user")
module.exports.Snip=require("./snip")