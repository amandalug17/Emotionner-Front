"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * Import axios for API calls

 */

/**

 * our API URL

 */
var API_URL = "https://emotionner.herokuapp.com/";
/**

 * Registration method, we use this function to register a new user in out db

* we use a post method from axios to the back 

 * @param {*} name as string

 * @param {*} lastname  as string

 * @param {*} email  as string

 * @param {*} birthdate  as string

 * @param {*} ocupation as sting

 * @param {*} premium as boolean

 * @param {*} password  as sting

 * @returns response of the post method

 */

var register = function register(name, lastname, email, birthdate, ocupation, premium, password) {
  return _axios.default.post(API_URL + "users/signup", {
    name: name,
    lastname: lastname,
    email: email,
    birthdate: birthdate,
    ocupation: ocupation,
    premium: premium,
    password: password
  });
};
/**

 * Login method, we do a post method to de db

 * @param {*} email as string

 * @param {*} password as string

 * @returns response data from axios 

 */


var login = function login(email, password) {
  return _axios.default.post(API_URL + "users/signin", {
    email: email,
    password: password
  }).then(function (response) {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};
/**

 * Login method admin, we do a post method to de db, if the user returned by the db has the

 * admin role we store it in the web storage

 * @param {*} email as string

 * @param {*} password as string

 * @returns response data from axios 

 */


var loginA = function loginA(email, password) {
  return _axios.default.post(API_URL + "users/signin", {
    email: email,
    password: password
  }).then(function (response) {
    if (response.data.accessToken && response.data.roles[0] === "ROLE_ADMIN") {
      localStorage.setItem("admin", JSON.stringify(response.data));
    }

    return response.data;
  });
};
/**

 * Logout method, we remove the item user from the local storage

 */


var logoutA = function logoutA() {
  localStorage.removeItem("admin");
};
/**

 * Logout method, we remove the item user from the local storage

 */


var logout = function logout() {
  localStorage.removeItem("user");
};
/**

 * Get current user method, we return the item user that we stored in the browser

 */


var getCurrentUser = function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
};
/**

 * We validate if there is a current user logged

 * @param {*} user as an instance of user object

 */


var isAuth = function isAuth(user) {
  if (user) {
    return true;
  } else {
    return false;
  }
};
/**

 * Get current admin method, we return the item admin that we stored in the browser

 */


var getCurrentAdmin = function getCurrentAdmin() {
  return JSON.parse(localStorage.getItem("admin"));
};
/**

 * We validate if there is a current user logged

 * @param {*} user as an instance of user object

 */


var isAdmin = function isAdmin(user) {
  if (user) {
    return true;
  } else {
    return false;
  }
};

var _default = {
  register: register,
  login: login,
  logout: logout,
  getCurrentUser: getCurrentUser,
  isAuth: isAuth,
  loginA: loginA,
  logoutA: logoutA,
  isAdmin: isAdmin,
  getCurrentAdmin: getCurrentAdmin
};
exports.default = _default;

//# sourceMappingURL=auth.service.js.map