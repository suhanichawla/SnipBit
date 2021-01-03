const db=require("../models")

exports.saveSnip= async function(req,res,next){
    try{
        var snip;
        //check if snip already present
        if(req.body.snipID==null){
            snip=await db.Snip.create({
                name:req.body.name,
                code:req.body.code,
                user:req.params.id
            })
        }else{
            
            var newvalues = { $set: { name:req.body.name,
                code:req.body.code,
                user:req.params.id
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
        let snips=await db.Snip.find()
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