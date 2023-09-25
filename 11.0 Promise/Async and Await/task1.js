/* Async and await is more comfortable way to work with promises */

/* Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404 */

async function loadJson(url) {

  const response = await fetch(url);

  if (response.status == 200) {
    let user = await response.json();
    return user;
  }

  throw new Error(response.status);

}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert);