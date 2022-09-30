const Github = require('./github');

describe('Github', () => {
  it('fetches data', () => {
      const mockedAPI = {
        fetchRepositoryInfo: (repoName, callback) => {
            callback({
							name: 'sinatra/sinatra',
							description: 'Some fake description'
						});
        	}
        };

		const github = new Github(mockedAPI);

		github.fetch('sinatra/sinatra');

		expect(github.getRepoData()).toEqual({
			name: 'sinatra/sinatra',
			description: 'Some fake description'
		});
  });
});