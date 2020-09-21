const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://xanflix-api.herokuapp.com';

export default {
  URL,
};
