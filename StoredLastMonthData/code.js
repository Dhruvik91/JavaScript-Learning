/* in this task, i'll learn about the date and time.

Requriements are: 

1. Need to store the data of the last month
2. The entered data can't be changed.

*/

function validateDay(date) {

    const currentDate = new Date('01-01-2024');

    const maxDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    let lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1).getMonth();

    const userGivenDate = new Date(date).getMonth();

    if (userGivenDate > lastMonth) {

        console.log("Your entered date is exceeding");

    }
    else if (userGivenDate < lastMonth) {

        console.log("Your Entered Date is not valid");

    }
    else {

        console.log("Good work");
    }



}


validateDay("2024-01-11");