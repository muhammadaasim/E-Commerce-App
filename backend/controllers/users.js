var { Users } = require("../models/user");

module.exports.getUser = async (req, res) => {
  const user = await Users.find({});
  try {
    res.send({ user: user, error: "", status: true });
  } catch (error) {
    res.send({
      user: "",
      error: "Error Occurs in getting users",
      status: false,
    });
  }
};
module.exports.deleteUser = async (req, res) => {
  const { email } = req.params;
  try {
    const deleteUserRes = await Users.deleteOne({ email: email });
    res.send({
      user: deleteUserRes,
      error: "",
      status: true,
      message: "Delete Succesful",
    });
  } catch (Error) {
    res.send({
      user: Error,
      error: error.message,
      status: false,
      message: "User doesn't exist",
    });
  }
};

module.exports.UpdateUser= async(req,res)=>{
    try {
        const newUser = await Users(req.body);
        newUser.UpdateOne();
        res.send({
          user: newUser,
          error: "",
          status: true,
          message: "update Success",
        });
      } catch (error) {
        res.send({
          user: "",
          error: error.message,
          status: false,
          message: "Error in upating users",
        });
      }
}


module.exports.createUser = async (req, res) => {
  const { email } = req.body;
  const userExists = await Users.findOne({ email });
  if (userExists) {
    res.send({
      user: "",
      error: "",
      status: true,
      message: "User Exists already",
    });
  } else {
    try {
      const newUser = await Users(req.body);
      newUser.save();
      res.send({
        user: newUser,
        error: "",
        status: true,
        message: "Successful",
      });
    } catch (error) {
      res.send({
        user: "",
        error: error.message,
        status: false,
        message: "Error in creating users",
      });
    }
  }
};
