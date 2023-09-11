
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

function addToLibrary(newBook) {
    const duplicateBook = library.find((book) => book.ISBN === newBook.ISBN);

    if (!duplicateBook) {
        library.push(newBook);
        saveLibraryToLocalStorage();
    } else {
        console.warn("The ISBN already exists:", newBook.ISBN);
    }

    return library;
}

function checkedOutBook(isbn, noOfDays = 7) {

    if (noOfDays <= 0) {
        console.warn("You entered the invalid number of days.");
        return;
    }


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
        console.log(`Checked out: "${book.Title}", Due Date: ${dueDate}`);
        saveLibraryToLocalStorage();
    }
}

function returnBook(isbn) {
    const book = getTheBook(isbn);
    if (book) {
        book.checkedOut = false;
        saveLibraryToLocalStorage();
        console.log(`The book "${book.Title}" has been returned`);
    } else {
        console.warn("Please enter the right ISBN number");
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

    if (overdueBooks.length === 0) {
        console.warn("Everything is alright, no overdue books found.");
    }

    return overdueBooks;
}


function rateBook(isbn, rating) {

    const book = getTheBook(isbn);

    if (book) {
        if (rating >= 1 && rating <= 5) {
            book.rating.push(rating);
            saveLibraryToLocalStorage();
        }
        else (console.warn("Enter the correct rating. It is not in the range of 1 to 5"));
    }
    return library;
}

function getAverageOfRating(isbn) {
    const book = getTheBook(isbn);

    if (book) {
        let arrayOfRating = book.rating;

        let sum = arrayOfRating.reduce((sum, current) => sum + current, 0);

        let average = sum / arrayOfRating.length;

         const result = Math.round(average * 100) / 100;

        return (`The ${book.Title} has the average rating of ${result}`);
    }

    else {
        console.warn("Enter the correct ISBN");
    }
}

function sortBooks(criteria) {
    library.sort((a, b) => {
        const criteriaA = a[criteria];
        const criteriaB = b[criteria];
        return criteriaA.localeCompare(criteriaB); 
    });
}

function getTheBook(isbn) {
    return library.find((book) => book.ISBN === isbn);
}

function saveLibraryToLocalStorage() {
    localStorage.setItem('library', JSON.stringify(library));
}


function loadLibraryFromLocalStorage() {
    const libraryData = localStorage.getItem('library');
    if (libraryData) {
        return JSON.parse(libraryData);
    } else {
        return [];
    }
}

function initializeLibrary() {
    library = loadLibraryFromLocalStorage();
}




// test cases 
const book1 = createBook("The story of my life", "Ravi", 12344);
const book2 = createBook("Will it be two sided", "Ravinath", 23456);
const book3 = createBook("My name is Hero", "Ravisankar", 45646);
const book4 = createBook("I started the War", "Ravi", 645646);



addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book4);


console.group("Checked Out Books");
console.log("List of all the books:");
checkedOutBook(23456, 1);
console.groupEnd();


console.group("Returned Books");
console.log("List of all the books:");
returnBook(23456);
console.groupEnd();


console.group("Library:");
console.log("List of all the books:");
console.table(library);
console.groupEnd();


console.group("Ratings:");
console.log("Ratings Of the book:");
console.table(rateBook(23456, 4.345));
rateBook(23456, 3.567);
rateBook(23456, 4.344);
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

console.group("Average Ratings:")
console.log(getAverageOfRating(23456));
console.groupEnd();

console.log(sortBooks('rating'));

