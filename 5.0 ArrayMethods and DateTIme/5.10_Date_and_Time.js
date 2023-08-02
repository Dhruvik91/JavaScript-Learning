/* Task 1:-

Create a Date object for the d: Feb 20, 2012, 3:12am. The time zone is local. */

/* const d = new Date(2012,1,20,3,12); // The month is only starts with 0 index like Jan will start with 0 but days are the same.

alert(d);
 */


/* Task 2:-

Write a function getWeekDay(d) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’. */

/* function getWeekDay(d) {

    let Date1 = d.getDay();  // Here the getDay() will return the value index of the day. 

    switch (Date1) {

        case 0:
            return "SU";

        
        case 1:
            return "MO";


        case 2:
            return "TE";


        case 3:
            return "WE";


        case 4:
            return "TH";


        case 5:
            return "FR";


        case 6:
            return "SA";
        
        }
    return Date1;
}

let d = new Date(2012, 0, 5);

alert(getWeekDay(d)); */


/* Task 3:-

European countries have days of week starting with Monday (number 1),
then Tuesday (number 2) and till Sunday (number 7). 

Write a function getLocalDay(d) that returns the “European” day of week for d. */
/* 
function getLocalDay(d) {

    let Date1 = d.getDay();  // Here the getDay() will return the value index of the day. 

    switch (Date1) {

        case 1:
            return "Monday";

        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 4:
            return "Thursday";

        case 5:
            return "Friday";

        case 6:
            return "Saturday";

        case 7:
            return "Sunday";


    }
    return Date1;
}

let d = new Date(2012, 0, 3);

alert(getLocalDay(d)); */




/* Task 4:-

Create a function getDateAgo(d, days) to return the day of month days ago from the d. */

/* function getDateAgo(d, num) {


    let newdate = new Date(d);

    newdate.setDate(d.getDate() - num);

    return newdate.getDate();   


    
} 

let d = new Date(2015, 0, 2);

alert( getDateAgo(d, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(d, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(d, 365) ); // 2, (2 Jan 2014) */


/* Task 5:- 

Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb). */



/* function getLastDayOfMonth(year, month) {
    let d = new Date(year, month + 1, 0);
    return d.getDate();
  }


alert(getLastDayOfMonth(2012, 1)); */



/* Task 6:-

Write a function getSecondsToday() that returns the number of seconds from the beginning of today. */

function getSecondsToday() {

    

    let d = new Date();

return (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds());


}
console.log(getSecondsToday());