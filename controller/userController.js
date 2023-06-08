import User from "../model/usermodel.js";

// all users
export const allUser = async (req, resp) => {
  const users = await User.find();

  resp.status(200).json({
    success: true,
    users,
  });
};

// create one
export const createUser = async (req, resp) => {
  try{
      let user = await User.findOne(req.body);
      if(user)return resp.status(400).json({message:"User already created",
  success:false})
  let newUser = new User(req.body);
  await newUser.save();

  return resp.status(200).json({
    success: true,
    message: "user created successfully",
    newUser,
  });}
  catch(err){
   console.log(err)
   resp.status(400).json({
    success: false,
    message: err,
  })
  }
};

// update user
export const updateUser = async (req, resp) => {
  try{
  const id = req.params.id;
  let user = await User.findById({_id:id});
  if (!user)
    return resp
      .status(400)
      .json({ message: "User doen't created", success: false });
  user = await User.findByIdAndUpdate({_id:id}, req.body);
  return resp.status(200).json({
    success: true,
    message: "User updated successfully",
    user,
  });}
  catch(err){
     console.log(err);
     resp.status(400).json({
      success: false,
      message: err,
    })
  }
};
// delete user
export const deleteUser = async (req, resp) => {
  try{
  const id = req.params;
  let user = await User.findById(id);
  if (!user)
    return resp
      .status(400)
      .json({ message: "User doen't created", success: false });
  user = await User.findByIdAndDelete(id);
  resp.status(200).json({
    success: true,
    message: "User deleted successfully",
    user,
  });}catch(err){
    console.log(err);
    resp.status(400).json({
     success: false,
     message: err,
   })
  }
};
