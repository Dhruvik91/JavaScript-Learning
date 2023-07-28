/* function Abb(inp) {

    let arr = inp.split(' ');

    let output = arr.map((item) => {
        return item.length > 4 ? item[0] + `${item.length - 2}` + item[item.length - 1] : item;
    });

    return output.join(' ');

}

let input = "Hello the real world are you really wanna escape the matrix"

alert(Abb(input)); 
 */
function Abb(inp) {

    let arr = inp.split(' ');

     let output = arr.reduce((perv, item) => {

        if ( item.length >= 4) {

            return  perv + item[0] + `${item.length - 2}` + item[item.length - 1] + ` `;
        }

        return perv + item + ' ';

    },''); 

/* 
    let output = arr.reduce((pre, item) => {

        return item.length > 4 ? pre + item[0] + `${item.length - 2}` + item[item.length - 1] : pre + item;
    },''); */

    return output;

}

let input = "these names aree enough"

alert(Abb(input)); 