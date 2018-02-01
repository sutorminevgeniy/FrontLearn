import axios from 'axios';
import confLesson from '../confLesson';

export const GET_LESSON = 'GET_LESSON';
export function getLesson (lessonId) {
    return axios.get(`/api/lesson/${lessonId}`)
        .then(response => response.data)
        .then(lesson => ({
            type: GET_LESSON,
            lesson
        }));
}

export const EDIT_LESSON = 'EDIT_LESSON';
export function editLesson (lesson) {
    let incorrFlag = false;
    let incorrField = {};

    for(let key in confLesson){
        // проверка на заполненность полей
        if(confLesson[key].req && getByPath(lesson, key) === '' ){
          incorrField[key] = 'Поле должно быть заполнено';
          incorrFlag = true;
        }
    }

    if(incorrFlag){ 
        console.log(incorrField);
        return ({
            type: EDIT_LESSON,
            info: { incorrField }
        });
    } else {
        return axios.put(`/api/lesson`, { lesson })
            .then(response => response.data)
            .then(info => ({
                type: EDIT_LESSON,
                info
            }));}
    }

export const SET_VALUE = 'SET_VALUE';
export function setValue(path, value) {
    return {
        type: SET_VALUE,
        path, 
        value
    };
}

export const ADD_LEVEL = 'ADD_LEVEL';
export function addLevel() {
    return {
        type: ADD_LEVEL,
        
    };
}

export const DELETE_LEVEL = 'DELETE_LEVEL';
export function deleteLevel() {
    return {
        type: DELETE_LEVEL,
        
    };
}

export const NEXT_BUTTON = 'NEXT_BUTTON';
export function nextButton() {
    return {
        type: NEXT_BUTTON
    };
}
export const NEXT_LEVEL = 'NEXT_LEVEL';
export function nextLevel() {
    return {
        type: NEXT_LEVEL
    };
}

export const PREV_LEVEL = 'PREV_LEVEL';
export function prevLevel() {
    return {
        type: PREV_LEVEL
    };
}

export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export function changeLevel(level) {
    return {
        type: CHANGE_LEVEL,
        level
    };
}


function getByPath(obj, path){
    let pathArr = path.split('.');

    let resfield = obj;

    for (let key in pathArr) {
        resfield = resfield[pathArr[key]];
    }

    return resfield;
}