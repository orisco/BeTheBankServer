const { User } = require("../models/user.model.js");

exports.addDetails = (req, res) => {
  User.updateOne(
    {
      _id: req.params.userId,
    },
    { $set: req.body }
  ).exec((err, user) => {
    if (err) {
      res.status(400).json({ err: true, msg: err.message });
    }

    res.status(200).json({ err: false, msg: "updated user information" });
  });
};

exports.getUserInfo = (req, res) => {
  User.find({ _id: req.userId }).exec((err, user) => {
    if (err) {
      res.status(400).json({ err: true, msg: err.message });
    }

    res.status(200).json(user);
  });
};
