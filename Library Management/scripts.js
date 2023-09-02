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
        rating: null
    };
    return book;
}

function addToLibrary(book) {
    library.push(book);
    return library;
}

function checkedOutBook(isbn, noOfDays) {
    const book = library.find((book) => book.ISBN === isbn);

    if (!book) {
        alert("Book not found in the library.");
    } else if (book.checkedCount > MAX_COUNT) {
        alert("This book is unavailable for checkout.");
    } else if (book.checkedOut) {
        alert("This book is already checked out.");
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
    const book = library.find((book) => book.ISBN === isbn);
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
    const rate = [];
    const book = library.find((book) => book.ISBN === isbn);

    if (book) {

        if (rating >= 1 || rating <= 5) {
            book.rating = rate.push(rating);
        }
        else (alert("Add the current Rate"));
    }
    return library;
}

const book1 = createBook("The story", "Ravi", 12344);
const book2 = createBook("The story of him", "Ravinath", 23456);
const book3 = createBook("The story of her", "Ravisankar", 45646);
const book4 = createBook("The story of Ravi", "Ravi", 645646);

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);
addToLibrary(book4);

checkedOutBook(23456, 1);
console.log(library);

returnBook(12344);
console.log("List of all the books", library);

console.log("Rate Of the book", rateBook(23456, 6));

console.log("List of books by same author", findBookByAuthor("Ravi"));

console.log("List of overdue date books", listOverDueDate());
