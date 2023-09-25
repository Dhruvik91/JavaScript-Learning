/* Task: Fetch and Display User Data

Write an asynchronous function called getUserData that fetches user data from the following 

URL: https://jsonplaceholder.typicode.com/users/1. 

The function should use async and await to handle the asynchronous operation.

The function should return an object with the user's name, email, and phone as properties. */


async function getUserData(url) {
    try {
        const response = await fetch(url);
        const user = await response.json();
        return {
            name: user.name,
            email: user.email,
            phone: user.phone
        };
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
}

getUserData('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(error => console.error(error));


