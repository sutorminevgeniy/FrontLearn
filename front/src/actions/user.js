import axios from 'axios';

export const GET_USER = 'GET_USER';
export function getUser(logUser) { console.log('+++', logUser);
  return axios.post('/api/user', logUser)
    .then(response => response.data)
    .then(data => ({
      type: GET_USER,
      user: data.user
    }));
}

export const EXIT_USER = 'EXIT_USER';
export function exitUser() {
  return ({
    type: EXIT_USER
  });    
}