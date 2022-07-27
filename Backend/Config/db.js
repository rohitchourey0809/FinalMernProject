const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://rohitchourey0809:rohit$12345@cluster0.2j4drqb.mongodb.net/finalmernproject"
    // { useNewUrlParser: true, useUnifiedTopology: true }
  );
};

module.exports = connect;
