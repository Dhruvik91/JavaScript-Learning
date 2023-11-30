function fearNotLetter(str) {

    const aplhaStr = "abcdefghijklmnopqrstuvwxyz";
    const slicedStrFromFirstChar = aplhaStr.slice(aplhaStr.indexOf(str[0]), str.length + aplhaStr.indexOf(str[0]));
    console.log(slicedStrFromFirstChar);

    for (let i = 0; i < slicedStrFromFirstChar.length; i++) {

        if (str[i] !== slicedStrFromFirstChar[i]) {
            console.log(slicedStrFromFirstChar[i]);
            return slicedStrFromFirstChar[i];
        }
    }
    return undefined;
}

fearNotLetter("stvwx");