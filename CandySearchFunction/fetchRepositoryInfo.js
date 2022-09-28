const got = require('got');

class GithubAPI {

    constructor(){
        this.github = 'https://api.github.com/repos/'
    }
    
    fetchRepositoryInfo(url, callback){
        got(this.github + url).then((response) => {
            const result = JSON.parse(response.body)
            return result;
        // we can use the callback function to operate on the result
        }).then(callback)
    }
}

// const github = new GithubAPI;

// contains the url path and the callback function
// github.fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
//     console.log(receivedResponse);
// });


// 'https://api.github.com/repos/sinatra/sinatra';
