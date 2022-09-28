const got = require('got');

const fetchJSON = (url, callback) => {
    got(url).then((response) => {
        return JSON.parse(response.body);
    }).then(callback);
}

fetchJSON('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
})
