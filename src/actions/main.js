import axios from 'axios';

export const GET_MAIN = 'GET_MAIN';
export function getMain() {
  return axios.get('api/main')
    .then(response => response.data)
    .then(data => ({
      type: GET_MAIN,
      main: data.main
    }));
}