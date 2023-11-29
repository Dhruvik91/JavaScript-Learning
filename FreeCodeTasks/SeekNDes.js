/* Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function, 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */

/* destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]. */

function destroyer(arr, ...args) {

    const argsArr = [...args];
    return arr.filter(item => !args.includes(item))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);