var express=require("express")
const router=express.Router({mergeParams:true})
const {deleteSnip,getSnips,saveSnip}=require("../handlers/snip")

router.route("/save").post(saveSnip)
router.get("/",getSnips)
router.route("/:snipID")
      .delete(deleteSnip);


module.exports=router