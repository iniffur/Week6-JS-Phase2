const got = require('got');

class Github{
    
    constructor(API){
        this.API = API
        this.result
    }

    fetch(name){
        this.API.fetchRepositoryInfo(name, (response) => { 
            this.result = response;})
    }

    getRepoData(){
        return this.result;
    }
}

module.exports = Github;
