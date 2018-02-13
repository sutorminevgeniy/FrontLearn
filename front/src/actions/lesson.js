import axios from 'axios';

export const GET_LESSON = 'GET_LESSON';
export function getLesson (lessonId) {
    return axios.get(`/api/lesson/${lessonId}`)
        .then(response => response.data)
        .then(data => ({
            type: GET_LESSON,
            lesson: data.lesson
        }));
}

export const INPUT_ANSWER = 'INPUT_ANSWER';
export function inputAnswer(answer) {
    return {
        type: INPUT_ANSWER,
        answer
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