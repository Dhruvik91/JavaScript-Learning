function unique(str) {
    let arr = str.split('');

    let obj = {};


    for (let i = 0; i < arr.length; i++) {

        !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++;
    }
    console.log(obj);
}

let values = "Hello a Hello a a a my frnd a";

let answer = unique(values);

 //console.log(answer); // here the console value will not be dislayed as the function hasn't returned anything.