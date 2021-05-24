// const db = require("../models");
// const User = db.user;

// checkDuplicatIdOrEmail = (req, res, next) => {
//   User.findOne({
//     _id: req.body._id,
//   }).exec((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }

//     if (user) {
//       res.status(400).send({ message: "Id already exist " });
//     }
//   });
// };
