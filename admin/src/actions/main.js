import axios from 'axios';

export const GET_MAIN = 'GET_MAIN';
export function getMain() {
  return axios.get('/api/main')
    .then(response => response.data)
    .then(data => ({
      type: GET_MAIN,
      main: data
    }));
}

export const CHANGE_LANG = 'CHANGE_LANG';
export function changeLang(lang) {
    return {
        type: CHANGE_LANG,
        lang
    };
}