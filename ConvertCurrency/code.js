/* Task For Today
Create a currency converter That accepts Amount in one Currency Type and convert it To another type.
Make necessary Assumptions */


/* APIS from exchangerate*/


async function currencyConvter(currencyFrom, currencyTo, amount) {

    try {

        const data = await validateResponse(currencyFrom);

        const checkOtherCurrency = await validateResponse(currencyTo);

        console.log(data);
        if (data.result === "success" && checkOtherCurrency.result === "success") {

            const covertTo = data.conversion_rates[`${currencyTo}`];
            const calculatedAmount = amount * covertTo;

            console.log(calculatedAmount);
        }
        else {

            data.result === "error" ? console.log(data['error-type']) : console.log(checkOtherCurrency['error-type'])

        }

    } catch (error) {

        console.log(error);
    }

}

currencyConvter("INR", 'USD', 'abc')


async function validateResponse(currency) {

    const header = 'https://v6.exchangerate-api.com/v6/'
    const apiKey = 'ef18e086c2868fc97e360a12';
    const getCurrency = `/latest/${currency}`
    const url = header + apiKey + getCurrency;
    const response = await fetch(url);
    const data = await response.json();

    return data;

}