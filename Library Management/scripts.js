// this is the array of objects, which stores the books' data
let library = [];

// this function creates an object for book data
function createBook(title, author, bookISBN) {  
    const book = {
        Title: title,
        Author: author,
        ISBN: bookISBN,
        checkedOut: false
    }
    return book;
}

// this function adds the book to the library
function addToLibrary(book) {
    library.push(book);
    return library;
}

const book1 = createBook("The story", "Ravi", 12344);
const book2 = createBook("The story of him", "Ravinath", 23456);
const book3 = createBook("The story of her", "Ravisankar", 45646);

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);

// this function is used to check out a book
function checkedOutBook(isbn) {
    library.forEach((book) => {
        if (book.ISBN === isbn) {
            book.checkedOut = true; // Set the checkedOut key of the matched book to true
        }
    });
}

checkedOutBook(23456);
console.log(library);

function returnBook(isbn) {
    library.forEach((book) => {
        if (book.ISBN === isbn) {
            book.checkedOut = false // Set the checkedOut key of the matched book to false 
        }
    });
}

returnBook(12344);

console.log(library);
