import axios from 'axios';

export const GET_USER = 'GET_USER';
export function getUser(logUser) {
  // return axios.get('/api/user', logUser)
  //   .then(response => response.data)
  //   .then(data => ({
  //     type: GET_USER,
  //     user: data.user
  //   }));
  return ({
    type: GET_USER,
    user: logUser
  });    
}

export const EXIT_USER = 'EXIT_USER';
export function exitUser() {
  return ({
    type: EXIT_USER
  });    
}