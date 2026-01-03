const express=require("express")
const router=express.Router()
const {userLogin,userSignUp}=require("./controller.user")

router.post("/signUp",userSignUp)
router.post("/login",userLogin)

module.exports=router