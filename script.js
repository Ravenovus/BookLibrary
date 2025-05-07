

const myLibrary = [];

function Book(name, writer, year ){
    this.name = name;
    this.writer = writer;
    this.year = year;
    this.hasRead = false;
    this.bookID = crypto.randomUUID();
}

Book.prototype.getName = function(){
    return this.name;
}

Book.prototype.getWriter = function(){
    return this.writer;
}

Book.prototype.getYear = function(){
    return this.year;
}

Book.prototype.readCheck = function(){
    return this.hasRead;
}




function addBookToLibrary(){
    //collect parameters from form and make book(...)
}

function presentLibrary(){
    let library = document.querySelector("#library");
    myLibrary.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book");
    });
}