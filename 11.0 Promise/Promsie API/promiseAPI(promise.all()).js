/* Promise.all()

Promise.all takes an iterable (usually, an array of promises) and returns a new promise.

*/

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
    ));


    /* Please note that, if any promsie is get rejected then, all the promoise will not exectued.  */