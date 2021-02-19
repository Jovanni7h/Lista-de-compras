const userCtrl = {};
const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
}

userCtrl.createUser = async (req, res) => {
  const {username} = req.body;
  const newUser = new User({username});
  await newUser.save();
  res.json("User Created");
}

userCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

userCtrl.updateUser = async (req, res) => {
  const {username} = req.body;
  await User.findOneAndUpdate(
    { _id: req.params.id },{
      username : username
    }
  );
  res.json({ message: "Note Updated" });
};

userCtrl.deleteUser = async(req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json("Users Deleted");
}

module.exports = userCtrl;