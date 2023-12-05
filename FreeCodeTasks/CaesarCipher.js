/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. */

/* Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase.
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */


function rot13(str) {

    let alphabet = [];
    const result = [];
    const stringElems = str.split("");

    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {

        alphabet.push(String.fromCharCode(i));
    }

    const aplhaSeries = alphabet.concat(alphabet);

    for (let i = 0; i < stringElems.length; i++) {

        if (alphabet.includes(stringElems[i])) {
            result.push(aplhaSeries[(aplhaSeries.lastIndexOf(stringElems[i]) - 13)]);
        } else {
            result.push(stringElems[i])
        }
    }

    console.log(result.join(""));
}

rot13("SERR CVMMN");