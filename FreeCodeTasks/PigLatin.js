/* Pig Latin */

/*  If a word begins with a consonant, 
take the first consonant or consonant cluster, move it to the end of the word, and add ay to it. */

/*  If a word begins with a vowel, just add way at the end. */

function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const stringElems = str.split('');
    const endAddedString = { consonant: "ay", vowel: "way" };
    let subString = "";

    if (vowels.includes(str[0])) {
        subString = str.concat(endAddedString.vowel);
        console.log(subString);
        return subString;
    }

    for (let i = 0; i < stringElems.length; i++) {
        const element = stringElems[i];

        if (!vowels.includes(element)) {
            subString += element;
        } else {
            break;
        }
    }
    
    const slicedStrFromLastConso = str.slice(subString.indexOf(subString.charAt(subString.length - 1)) + 1);
    console.log(slicedStrFromLastConso);
    subString = slicedStrFromLastConso + subString + endAddedString.consonant;
    return subString; 
}

translatePigLatin("bdceight");