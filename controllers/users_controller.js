const User = require("../../models/");

async function logIn(req, res) {
  try {
    let user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await User.generateAuthToken(user);
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
    });
    user = User.asJson(user);
    user.token = token;
    res.json(user);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function signUp(req, res) {
  const user = await User.create(req.body);
  try {
    const token = await User.generateAuthToken(user);
    user.token = token;
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function logOut(req, res) {
  try {
    res.clearCookie("jwt");
    res.json({ message: "Logged out!" });
  } catch (e) {
    res.status(500).send();
  }
}

async function currentUser(req, res) {
  let response = await User.asJson(req.user);
  res.json(response).status(200);
}

module.exports = { logIn, signUp, logOut, currentUser };
