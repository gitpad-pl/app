// @REPO https://github.com/github-tools/github
// @EXAMPLES https://github.com/philschatz/octokat.js/tree/master/examples

const GithubAPI = require('./github-api.js');
var base64 = require('base-64');
// import base64 from 'base-64';

const config_array = require('../config.json');
// console.log(config_array);
// console.log(config_array["service"]);
var config = Object.assign({}, config_array);
// console.log(config.service);

const USER = config.service.github.user;
const PASS = config.service.github.pass;
// const REPO = 'swagger-api-php';
const ORG = 'gitpad-pl';
const REPO = 'docs';
const BRANCH_NAME = 'master';
const FILE = 'README.md';
const PATH = 'README.md';
const CONTENT = 'first line of file';
const COMMIT_MSG = 'first commit';

const HOST = config.service.github.host;
const URL_REPO = `${HOST}/${USER}/${REPO}`;


// var repository = gh.setRepo(ORG, REPO);

// console.log(repository);

// repository.write(
//     BRANCH_NAME,
//     PATH,
//     CONTENT,
//     COMMIT_MSG,
//     function (err) {
//         console.log(err)
//     }
// )


// unauthenticated client
// const gh = new GitHub();
// let gist = gh.getGist(); // not a gist yet
// gist.create({
//     public: true,
//     description: 'My first gist',
//     files: {
//         "file1.txt": {
//             content: "Aren't gists great!"
//         }
//     }
// }).then(function({data}) {
//     // Promises!
//     let createdGist = data;
//     return gist.read();
// }).then(function({data}) {
//     let retrievedGist = data;
//     // do interesting things
// });


function createFile() {
    var config1 = {
        message: 'Create a file',
        content: base64.encode('New file contents'),
        sha: SHA, // the blob SHA
        // branch: 'gh-pages'
    };
    repo.contents(FILE).create(config1)
        .then((info) => {
            console.log('File Created. new sha is ', info)
        })
}


// let api = new GithubAPI({token: 'API_TOKEN'});

console.log(GithubAPI);

let api = new GithubAPI({
    username: USER,
    password: PASS,
    auth: 'basic'
});

api.setRepo(ORG, REPO);
api.setBranch(BRANCH_NAME)
    .then(() => api.pushFiles(
        COMMIT_MSG,
        [
            {content: 'You are a Wizard, Harry', path: 'test/harry.txt'},
            // {content: 'May the Force be with you', path: 'test2/jedi.txt'}
        ])
    )
    .then(function () {
        console.log('Files committed!');
    });





