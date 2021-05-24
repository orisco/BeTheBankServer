const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    minlength: 6,
    required: true,
  },
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  birthDate: Date,
  companyName: String,
  companyNumber: String,
  companyShares: String,
  lastSession: String,
  loanAmount: Number,
  loanPeriod: Number,
  bankAccounts: [
    {
      bankName: String,
      branchNumber: String,
      AccountNumber: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
