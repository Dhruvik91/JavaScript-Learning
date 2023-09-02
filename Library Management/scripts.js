let library = [];
const MAX_COUNT = 3;

function createBook(title, author, bookISBN) {
    const book = {
        Title: title,
        Author: author,
        ISBN: bookISBN,
        checkedOut: false,
        checkedCount: 0,
        dueDate: null,
        rating: []
    };
    return book;
}

function addToLibrary(book) {
    library.push(book);
    return library;
}

function checkedOutBook(isbn, noOfDays) {
    const book = getTheBook(isbn);

    if (!book) {
        console.warn("Book not found in the library.");
    } else if (book.checkedCount > MAX_COUNT) {
        console.warn("This book is unavailable for checkout.");
    } else if (book.checkedOut) {
        console.warn("This book is already checked out.");
    } else {
        book.checkedOut = true;
        book.checkedCount++;
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + noOfDays);
        book.dueDate = dueDate;
        console.log(`Checked out: ${book.Title}, Due Date: ${dueDate}`);
    }
}

function returnBook(isbn) {
    const book = getTheBook(isbn);
    if (book) {
        book.checkedOut = false;
    }
}



function findBookByAuthor(authorName) {
    const booksByAuthor = [];
    library.forEach((book) => {
        if (book.Author === authorName) {
            booksByAuthor.push(book.Title);
        }
    });
    return booksByAuthor;
}



function listOverDueDate() {
    const overdueBooks = [];
    const now = new Date();
    library.forEach((book) => {
        if (book.dueDate && book.dueDate < now) {
            overdueBooks.push(book.Title);
        }
    });
    return overdueBooks;
}

function rateBook(isbn, rating) {

    const book = getTheBook(isbn);

    if (book) {
        if (rating >= 1 && rating <= 5) {
            book.rating.push(rating);
        }
        else (console.warn("Add the correct Rate"));
    }
    return library;
}

function getAverageOfRating(isbn) {
    const book = getTheBook(isbn);

    if (book && book.ratings && book.ratings.length > 0) { // Ensure there are ratings to calculate an average
        let sum = book.ratings.reduce((sum, current) => sum + current, 0);

        let average = sum / book.ratings.length; // Calculate the average

        return average; // Return the calculated average
    }

    return 0; // Return 0 if there are no ratings or the book is not found
}

function getTheBook(isbn) {
    return library.find((book) => book.ISBN === isbn);
}


// test cases 
const book1 = createBook("The story of my life", "Ravi", 12344);
const book2 = createBook("Will it be two sided", "Ravinath", 23456);
const book3 = createBook("My name is Hero", "Ravisankar", 45646);
const book4 = createBook("I started the War", "Ravi", 645646);

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);
addToLibrary(book4);

checkedOutBook(23456, 1);

returnBook(12344);


console.group("Library:");
console.log("List of all the books:");
console.table(library);
console.groupEnd();


console.group("Ratings:");
console.log("Ratings Of the book:");
console.table(rateBook(23456, 4));
rateBook(23456, 3);
rateBook(23456, 5);
console.groupEnd();


console.group("Library after rating:");
console.log("List of all the books:");
console.table(library);
console.groupEnd();



console.group("Books")
console.log("List of the book written by the same author:");
console.table(findBookByAuthor("Ravi"));
console.groupEnd();


console.group("OverDueDate Books:-");
console.log("List of overdue date books",);
console.table(listOverDueDate());
console.groupEnd();


console.group("Library after all the operations:");
console.log("List of all the books:");
console.table(library);
console.groupEnd();


console.log("The average of the ratings is:",getAverageOfRating(23456));