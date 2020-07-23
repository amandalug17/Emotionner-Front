"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _authHeader = _interopRequireDefault(require("./auth-header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = "https://emotionner.herokuapp.com/";

var getUserTasks = function getUserTasks(id) {
  fetch("https://emotionner.herokuapp.com/users/tasks/".concat(id)).then(function (res) {
    return res.json();
  }).then(function (t) {
    var tareas = t.tasks.tasks;
    return tareas;
  }).catch(function (err) {
    console.error(err);
  });
};

var getPublicContent = function getPublicContent() {
  return _axios.default.get(API_URL + "all");
};

var getUserContent = function getUserContent() {
  return _axios.default.get(API_URL + "user", {
    headers: (0, _authHeader.default)()
  });
};

var getAdminContent = function getAdminContent() {
  return _axios.default.get(API_URL + "admin", {
    headers: (0, _authHeader.default)()
  });
};

var _default = {
  getPublicContent: getPublicContent,
  getUserContent: getUserContent,
  getAdminContent: getAdminContent,
  getUserTasks: getUserTasks
};
exports.default = _default;

//# sourceMappingURL=user.service.js.map