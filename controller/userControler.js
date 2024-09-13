const User=require("../models/userModel") 


exports.createUser=async(req,res)=>{
    try {
        const {email}=req.body
        const userExistense=await User.findOne({email})
if(userExistense){
    res.status(404).json({message:"user already agsist"})

}else{

const user=new User(req.body)
    user.save(req.body)
    res.status(201).json({message:"user created succesuly",user})

}

    } catch (error) {
        res.status(500).json({message:`server error: ${error}`})
    }

}
exports.getALlUser=async(req,res)=>{
    try {
      const user=await User.find()
      if(!user || user.length==0)res.status(404).json({message:"There is no user exist in Database"});
      res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message:`server error: ${error}`})
    }

}
exports.UpdateUserWithId=async(req,res)=>{
    try {
     const {id}=req.params;
     const user= await User.findByIdAndUpdate(id,req.body,{new:true})

     if(!user)res.status(404).json({message:"User not Found"});
     res.status(200).json({message:"user updated ",user})
     

    } catch (error) {
        res.status(500).json({message:`server error: ${error}`})
    }

}
exports.DeleteUserWithId=async(req,res)=>{
    try {
     const {id}=req.params;
     const user= await User.findByIdAndDelete(id)

     if(!user)res.status(404).json({message:"User not Found"});
     res.status(200).json({message:"user deleted successfuly ",user})
     

    } catch (error) {
        res.status(500).json({message:`server error: ${error}`})
    }

}
exports.getUserById=async(req,res)=>{
    try {
     const {id}=req.params;
     const user= await User.findById(id)

     if(!user)res.status(404).json({message:"user not found or invalid id"});
     res.status(200).json({user})
     

    } catch (error) {
        res.status(500).json({message:`server error: ${error}`})
    }

}