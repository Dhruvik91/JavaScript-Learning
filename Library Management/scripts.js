
// this is the array of object, which stores the books data
let library = [];


// this function create the object of book data 
function createBook(title, author, isbn) {  
    
    const book = {
        Title: title,
        Author: author,
        ISBN: isbn,
        checkedOut: false
    }
      return book;
}


// this function add the book to the library
function addToLibrary(book) {

    library.push(book);
    return library;
    
} 


const book1 = (createBook("The story", "Ravi", 12344));
console.log(addToLibrary(book1));



function checkedOutBook(isbn) {
  
    const oldIsbn = library.map(book => book.ISBN);
   
    if ( isbn === oldIsbn) {
        
    }

}