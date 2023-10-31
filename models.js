const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lucky_number: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);


const collection_1 = new mongoose.Schema({
  name: {
    type: String
  },
  course: {
    type: String
  }
});
const Collection_1 = mongoose.model("collection_1", collection_1);

const collection_2 = new mongoose.Schema({
  userId: String
});
const Collection_2 = mongoose.model("collection_2", collection_2);


module.exports = User;
module.exports = Collection_1;
module.exports = Collection_2;