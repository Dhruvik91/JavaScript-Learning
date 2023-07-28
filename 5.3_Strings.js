/* Task 1:- 
Write a function ucFirst(str) that returns the string str with the uppercased first character, */

/* function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);

} 
alert(ucFirst("dhruvik")); */



/* Task 2:-
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false. */

/* function checkSpam(str) {
    if ( str.includes('VI') 
         || str.includes('vI') 
         || str.includes('Vi') 
         || str.includes('vi') 
         || str.includes('xx') 
         || str.includes('XX') ) {
            return true;
         } 
            return false;
}
alert(checkSpam("hello ")); */

/* Task 3:-
Create a function truncate(str, maxlength) that checks the length of the str and, 
if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength. */

/* function trun(str, num) {
    let sr1 = "...";

    if ( str.length === num || str.length < num) {
        return str;
    } 
    return str.slice(0, num) + sr1; 

}
alert(trun("hello", 5)); */



/* Task 4:-
Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it. */


/* function extract(str) {

    let num = +str.slice(1);
    return num;
} 
alert(extract('$124'));  */