/* Tip 4: Style your Console Output with the %c Specifier */

/* %c is not a part of JavaScript itself. It's a format specifier provided by modern browsers for styling the console. 

Whne you want to use it, it has to be the first parameter in the console.log() method. */

const styles = `padding: 15px;
                background-color: #2ecc71;
                color: black`;

console.log('%c Hello, Everyone!', styles);