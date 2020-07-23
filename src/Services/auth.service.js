/**
 * Import axios for API calls
 */
import axios from "axios";
/**
 * our API URL
 */
const API_URL ="https://emotionner.herokuapp.com/";


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
const register = (name,lastname,email,birthdate,ocupation,premium,password) => {
  return axios.post(API_URL + "users/signup", {
    name,
    lastname,
    email,
    birthdate,
    ocupation,
    premium,
    password
  });
};
/**
 * Login method, we do a post method to de db
 * @param {*} email as string
 * @param {*} password as string
 * @returns response data from axios 
 */
const login = (email, password) => {
  return axios
    .post(API_URL + "users/signin", {
      email,
      password,
    })
    .then((response) => {
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
const loginA = (email, password) => {
  return axios
    .post(API_URL + "users/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken && response.data.roles[0] === "ROLE_ADMIN") {
        localStorage.setItem("admin", JSON.stringify(response.data));
      }

      return response.data;
    });

};
/**
 * Logout method, we remove the item user from the local storage
 */
const logoutA = () => {
  localStorage.removeItem("admin");
};
/**
 * Logout method, we remove the item user from the local storage
 */
const logout = () => {
  localStorage.removeItem("user");
};
/**
 * Get current user method, we return the item user that we stored in the browser
 */
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

/**
 * We validate if there is a current user logged
 * @param {*} user as an instance of user object
 */


const isAuth= (user)=>{
    if(user){
      return true
    } else {
      return false
    }
}
/**
 * Get current admin method, we return the item admin that we stored in the browser
 */
const getCurrentAdmin = () => {
  return JSON.parse(localStorage.getItem("admin"));
};
/**
 * We validate if there is a current user logged
 * @param {*} user as an instance of user object
 */

const isAdmin= (user)=>{
  if(user){
    return true
  } else {
    return false
  }
}

export default {
  register,
  login,
  logout,
  getCurrentUser,
  isAuth, 
  loginA,
  logoutA,
  isAdmin,
  getCurrentAdmin
};