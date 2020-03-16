const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  courseCode: {
    type: String,
    default: "",
    required: "courseCode cannot be blank",
    validate: [courseCode => courseCode && courseCode.length == 4]
  },
  courseName: {
    type: String,
    default: "",
    required: "coursename is required"
  },
  section: {
    type: String,
    default: "",
    required: "section is required",
    validate: [section => section && section.length >= 3]
  },
  semester: {
    type: String,
    default: "",
    required: "semester is required",
    validate: [semester => semester && semester.length == 1]
  },
  creator: {
    type: Schema.ObjectId,
    ref: "User"
  }
});
mongoose.model("Course", CourseSchema);
