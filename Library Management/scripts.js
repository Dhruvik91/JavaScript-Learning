// this is the array of objects, which stores the books' data
let library = [];

let count = 0;

const MAX_COUNT = 3;

// this function creates an object for book data
function createBook(title, author, bookISBN) {
    const book = {
        Title: title,
        Author: author,
        ISBN: bookISBN,
        checkedOut: false,
        checkedCount: count,
    }
    return book;
}

// this function adds the book to the library
function addToLibrary(book) {
    library.push(book);
    return library;
}



// this function is used to check out a book
function checkedOutBook(isbn, noOfDays) {

    const now = new Date();
    const dueDate = new Date(now.getTime() + (noOfDays * 24 * 60 * 60 * 1000));

    library.forEach((book) => {
        if (book.ISBN === isbn) {
            book.checkedOut = true;      // Set the checkedOut key of the matched book to true
            book.checkedCount = ++count;
            book.dueDate = dueDate;

            if (book.checkedCount > MAX_COUNT) {
                book.checkedOut = false;       
                alert("This book is unavaiable");
            }
        }
    });
}


function returnBook(isbn) {
    library.forEach((book) => {
        if (book.ISBN === isbn) {
            book.checkedOut = false // Set the checkedOut key of the matched book to false 
        }
    });
}


let bookWritten = []; // this is the array that will add the books by the author namw


// this function find the book wirtten by the author
function findBookByAuthor(authorName) {

    library.forEach((book) => {
        if (book.Author === authorName) {
            bookWritten.push(book.Title);
        }
    });
    return bookWritten;
}





const book1 = createBook("The story", "Ravi", 12344);
const book2 = createBook("The story of him", "Ravinath", 23456);
const book3 = createBook("The story of her", "Ravisankar", 45646);
const book4 = createBook("The story of Ravi", "Ravi", 645646);

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);
addToLibrary(book4);

checkedOutBook(23456, 4);
console.log(library);

returnBook(12344);
console.log(library);


console.log(findBookByAuthor("Ravi"));
