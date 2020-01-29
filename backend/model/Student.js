const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Student = new Schema({
  student_name: {
    type: String
  },
  student_email: {
    type: String
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  },
  group: {
    type: String
  },
  skills: {
    type: Array
  },
  internship: {
    type: String
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', Student)