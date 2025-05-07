

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

Book.prototype.getID = function(){
    return this.bookID;
}




function addBookToLibrary(name, writer, year){

    const newBook = new Book(name,writer,year);
    myLibrary.push(newBook);
    presentLibrary();
    //collect parameters from form and make book(...)
}

function presentLibrary(){
    let library = document.querySelector("#library");
    myLibrary.forEach((book) => {
        if ( document.getElementById(book.getID()) == null){
            let bookCard = document.createElement("div");
            bookCard.classList.add("book");
            bookCard.id = book.getID();
            let name = document.createElement("p");
            name.classList.add("bookName");
            let writer = document.createElement("p");
            writer.classList.add("bookWriter");
            let year = document.createElement("p");
            year.classList.add("bookYear");
            let read = document.createElement("p");
            read.classList.add("haveRead");
            let node = document.createTextNode("BookName: "+book.getName());
            name.appendChild(node);
            node = document.createTextNode("Writer: "+book.getWriter());
            writer.appendChild(node);
            node = document.createTextNode("Year of release: "+book.getYear());
            year.appendChild(node);
            if(book.readCheck()){
                node = document.createTextNode("Have Read: "+"Yes");
            }
            else{
                node = document.createTextNode("Have Read: "+"No");
            }
            read.appendChild(node);
            let readToggleButton = document.createElement("BUTTON");
            node = document.createTextNode("Toggle Read Completion");
            readToggleButton.appendChild(node);
            bookCard.appendChild(name);
            bookCard.appendChild(writer);
            bookCard.appendChild(year);
            bookCard.appendChild(read);
            bookCard.appendChild(readToggleButton);
            library.appendChild(bookCard);
        }
    });
}

addBookToLibrary("B3", "Clown 1", "1995");
addBookToLibrary("B4","Clown 3", "2005");