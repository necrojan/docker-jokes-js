const axios = require('axios');

const ax = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes',
});

function getRandomJokes() {
  return ax.get('/random')
    .then(response => {
      console.log('res', response.data);
      return response.data
    });
}


exports.Data = getRandomJokes();