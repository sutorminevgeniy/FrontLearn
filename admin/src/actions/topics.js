import axios from 'axios';

export const GET_TOPICS = 'GET_TOPICS';
export function getTopics() {
  return axios.get('/api/topics')
    .then(response => response.data)
    .then(data => ({
      type: GET_TOPICS,
      topics: data.topics,
      lessons: data.lessons
    }));
}

export const DELETE_LESSON = 'DELETE_LESSON';
export function deleteLesson(id) {
    return axios.delete(`/api/lesson/${id}`)
        .then(response => ({
            type: DELETE_LESSON,
            id
        }));
}