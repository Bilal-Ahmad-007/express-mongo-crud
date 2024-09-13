const express=require("express")
const router=express.Router()
const userControler= require("../controller/userControler")


router.get("/",userControler.getALlUser)
router.post("/create",userControler.createUser)
router.get("/:id",userControler.getUserById)
router.put("/:id",userControler.UpdateUserWithId)
router.delete("/:id",userControler.DeleteUserWithId)


module.exports=router