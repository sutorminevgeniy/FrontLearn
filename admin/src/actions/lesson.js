import axios from 'axios';

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
    return axios.put(`/api/lesson`, { lesson })
        .then(response => response.data)
        .then(lesson => ({
            type: EDIT_LESSON,
            lesson
        }));
}

export const SET_VALUE = 'SET_VALUE';
export function setValue(path, value) {
    return {
        type: SET_VALUE,
        path, 
        value
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