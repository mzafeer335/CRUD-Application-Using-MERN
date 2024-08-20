import userModels from "../models/User.js";

//craete Api
const Createuser = async (req, res) => {
  try {
    const { name, fathername, email, phone } = req.body;

    const NewUser = new userModels({
      name,
      fathername,
      email,
      phone,
    });
    await NewUser.save();
    res
      .status(200)
      .json({ success: true, message: "user created syccessfully", NewUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "internal server error", NewUser });
  }
};

//get API
const GetUser = async (req, res) => {
  try {
    const user = await userModels.find();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

//update api

const UpdateUser = async (req, res) => {
  try {
    const UserId = req.params.id;
    const updatedUser = await userModels.findByIdAndUpdate(UserId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

//delete api

const DeleteUser = async (req, res) => {
  try {
    const UserId = req.params.id;
    const deleteUser = await userModels.findByIdAndDelete(UserId);
    if (!deleteUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "user deleted sucessfully" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

export { Createuser, GetUser, UpdateUser, DeleteUser };
