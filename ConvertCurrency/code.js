/* Task For Today
Create a currency converter That accepts Amount in one Currency Type and convert it To another type.
Make necessary Assumptions */


/* APIS from exchangerate*/



async function currencyConvter(currencyFrom, currencyTo, amount) {


    if (amount < 0 || isNaN(amount)) {

        console.log(`Please enter the correct amount`);
    }

    try {

        const base_url = 'https://v6.exchangerate-api.com/v6/'
        const apiKey = 'ef18e086c2868fc97e360a12';
        const getCurrency = `/pair/${currencyFrom}/${currencyTo}/${amount}`
        const url = base_url + apiKey + getCurrency;
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        // (data);
        if (data.result === "success") {
            const covertTo = data.conversion_result;
            console.log(covertTo);
        }
        else if (data.result === "error") {
            console.log(data['error-type']);
        }

    } catch (error) {
        console.log(error);
    }

}

(currencyConvter("USD", "INR", 6));

/* async function wrapperFunction() {

    let currencyfrom = document.getElementById("Cfirst").value;

    console.log(currencyfrom);
    let currencyto = document.getElementById("Csecond").value;

    console.log(currencyto);
    let amount = document.getElementById("amount").value;

    console.log(amount);


    document.getElementById("Cfirst").value = ' ';
    document.getElementById("Csecond").value = ' ';
    document.getElementById("amount").value = ' ';



    const answer = await currencyConvter(currencyfrom, currencyto, amount)

    console.log(answer);

    document.getElementById("Display").innerHTML = answer;

} */

