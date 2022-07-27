const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://rohitchourey:rohit12345@cluster0.2j4drqb.mongodb.net/Mern"
    // { useNewUrlParser: true, useUnifiedTopology: true }
  );
};

module.exports = connect;
