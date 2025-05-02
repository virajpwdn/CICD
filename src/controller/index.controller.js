const { userModel } = require("../models/user.model");

module.exports.indexcontroller = (req, res) => {
  res.render("index");
};

module.exports.createUser = async (req, res) => {
  const { username, bio, email, profileImage } = req.body;

  const newUser = await userModel.create({
    username,
    bio,
    email,
    profileImage,
  });

  res.status(200).json({ newUser });
  // res.redirect("/home")
};

module.exports.getUserController = async (req, res) => {
  try {
    const user = await userModel.find();
    if (!user) return res.status(400).json({ message: "Not found" });

    res.json(200).json({ user, message: "Successfull" });
  } catch (error) {
    console.error(error);
  }
}; 

module.exports.homeController = (req, res) => {
  res.render("home");
};
