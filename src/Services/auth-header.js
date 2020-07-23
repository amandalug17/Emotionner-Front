/**
 * Header authentication function, we use this function to get the access token of a 
 * user
 */
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
     
      return { 'x-access-token': user.accessToken };       
    } else {
      return {};
    }
  }