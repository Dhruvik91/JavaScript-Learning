function Abb(inp) {

    let arr = inp.split(' ');

     let output = arr.reduce((perv, item) => {

        if ( item.length >= 4) {

            return  perv + item[0] + `${item.length - 2}` + item[item.length - 1] + ` `;
        }

        return perv + item + ' ';

    },''); 



    return output;

}

let input = "these names aree enough"

console.log(Abb(input)); 