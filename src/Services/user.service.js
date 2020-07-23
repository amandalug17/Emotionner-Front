import axios from "axios";
import authHeader from "./auth-header";

const API_URL ="https://emotionner.herokuapp.com/";
const getUserTasks = (id) => {
  fetch(`https://emotionner.herokuapp.com/users/tasks/${id}`)
          .then(res => res.json())
          .then(t => {
            const tareas = t.tasks.tasks
            return tareas
          })
          .catch(function(err) {
            console.error(err);
          });
};

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserContent = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};


const getAdminContent = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserContent,
  getAdminContent,
  getUserTasks
};