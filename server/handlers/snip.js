const db=require("../models")

exports.saveSnip= async function(req,res,next){
    try{
        var snip;
        //check if snip already present
        if(req.body.snipID==null){
            snip=await db.Snip.create({
                name:req.body.name,
                code:req.body.code,
                user:req.params.userID
            })
        }else{
            
            var newvalues = { $set: { name:req.body.name,
                code:req.body.code,
                user:req.params.userID
            } };
            snip=await db.Snip.findOneAndUpdate({_id:req.body.snipID},newvalues,{new: true})
        }
        
        return res.status(200).json(snip);

    }catch(e){
        return next(e);
    }
}

exports.getSnips= async function(req,res,next){
    try{
        console.log("user id is",req.params.userID)
        let snips=await db.Snip.find({user:req.params.userID})
        .sort({createdAt:"desc"})
        return res.status(200).json(snips)
    }catch(e){
        return next(e);
    }
}

exports.deleteSnip= async function(req,res,next){
    try{
        let found_snip=await db.Snip.findById(req.params.snipID)
        await found_snip.remove();
        return res.status(200).json(found_snip)
    }catch(e){
        return next(e);

    }
}