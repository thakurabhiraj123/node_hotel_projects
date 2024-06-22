const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    min: 0,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
    min: 0,
  },
  address: {
    type: String,
    required: true,
  },
});
const Person=mongoose.model('Person',personSchema);
module.exports=Person;
