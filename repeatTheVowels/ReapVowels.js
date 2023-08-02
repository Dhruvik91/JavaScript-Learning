/* Write a function RepeatVowels that repeat the vowels in given string
it takes two arguments
string  on which we need to perform operation.
number how many times the vowels to be repeated. it should only accept number that is greater than 1 else show error message.
example
RepeatVowels("bhavya",3) -> bhaaavyaaa
RepeatVowels("keval",1) -> error message */

function ReapVowels(str, num) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let arr = [...str];
   
          if (num > 1 && num !== " ") {

        for (let i = 0; i < arr.length; i++) {

                if ((vowel.includes(arr[i]))) {

                    {
                        arr[i] = arr[i].repeat(num);
                    }         
            }

        } return String(arr).split(',').join();

    } else return "Error"; 

} 
alert(ReapVowels("Dhruvik", 3));



   

      
