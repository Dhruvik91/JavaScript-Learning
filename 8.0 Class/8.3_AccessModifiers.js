class Book {
    constructor(author) {
      this._author = author;  // and the protected properties are prefixed as the underscore.
    }
    // getter
    get writer() {          // here the get fun() returns the value
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {            // here the set fun() sets the value 
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);

  novel.writer = 'newAuthor';  // here we are calling method but it looks like a property.
  console.log(novel.writer);

  /* Note:- The getter and setter are used for abstraction of data. */