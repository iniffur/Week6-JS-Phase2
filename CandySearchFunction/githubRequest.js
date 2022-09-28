const got = require('got');

// Create a "handler" callback function.#
const url = 'https://api.github.com/repos/sinatra/sinatra';


got(url)
  .then((response) => {
    const result = JSON.parse(response.body);
    console.log(result.id);
  });



// Call `got` and provide the handler callback function.
// This will get called by `got` when the response is received.

