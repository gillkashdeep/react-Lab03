const users = require("../../app/controllers/users.server.controller");
const course = require("../../app/controllers/course.server.controller");
//
module.exports = function(app) {
  app
    .route("/api/course")
    .get(course.list)
    .post(users.requiresLogin, course.create);
  //
  app
    .route("/api/course/:courseId")
    .get(course.read)
    .put(users.requiresLogin, course.hasAuthorization, course.update)
    .delete(users.requiresLogin, course.hasAuthorization, course.delete);
  //
  app.param("courseId", course.courseByID);
};
