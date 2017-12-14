import axios from 'axios';

export const GET_TOPICS = 'GET_TOPICS';

export function getTopics() {
  return axios.get('api/topics')
    .then(response => response.data)
    .then(topics => ({
      type: GET_TOPICS,
      topics
    }));
}