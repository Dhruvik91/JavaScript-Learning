function checkCashRegister(price, cash, arr) {
    const cid = arr.reverse();
    const unitValues = {
        "ONE HUNDRED": 100.0,
        "TWENTY": 20.0,
        "TEN": 10.0,
        "FIVE": 5.0,
        "ONE": 1.0,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01
    };

    let change = (cash - price) * 100; // Represent currency in cents for integer calculations
    let checking = (cash - price) * 100;
    const totalMoneyInDrawer = cid.reduce((sum, curr) => sum + curr[1] * 100, 0);
    const actualNoOfCoinsForEach = {};

    cid.forEach(item => {
        const number = Math.ceil(item[1] / unitValues[item[0]]);
        actualNoOfCoinsForEach[item[0]] = number;
    });

    let finalCashCount = {};

    for (let coin of Object.keys(actualNoOfCoinsForEach)) {
        const coinValue = unitValues[coin] * 100; // Represent currency in cents for integer calculations
        let coinsUsedInEachItera = 0;

        for (let i = 1; i <= actualNoOfCoinsForEach[coin]; i++) {
            const amount = i * coinValue / 100;

            if (change >= coinValue && amount <= cid.find(item => item[0] === coin)[1] * 100) {
                change -= coinValue;
                coinsUsedInEachItera += coinValue / 100;
            } else {
                break;
            }
        }

        if (coinsUsedInEachItera > 0) {
            finalCashCount[coin] = [coin, coinsUsedInEachItera];
        }
    }
    const finalAnswer = {};
    console.log(change);

    if (totalMoneyInDrawer < checking || change > 0) {
        finalAnswer.status = "INSUFFICIENT_FUNDS";
        finalAnswer.change = [];
    } else if (totalMoneyInDrawer == checking) {
        finalAnswer.status = "CLOSED";
        finalAnswer.change = cid.reverse();
    } else {
        finalAnswer.status = "OPEN";
        finalAnswer.change = Object.values(finalCashCount).filter(item => item[1] > 0);
    }

    return finalAnswer;
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));