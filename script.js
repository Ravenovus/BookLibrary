

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

Book.prototype.toggleRead = function(){
    this.hasRead = !this.hasRead;
}

function removeBook(id){
    let bookToRemove = document.getElementById(id);
    bookToRemove.remove();
    let index = myLibrary.findIndex(book => book.getID() === id);
    myLibrary.splice(index,1);

}

function updateReadToggle(id){
    //let bookToToggle = document.getElementById(id);
    let index = myLibrary.findIndex(book => book.getID() === id);
    myLibrary[index].toggleRead();
}


function addBookToLibrary(name, writer, year){

    const newBook = new Book(name,writer,year);
    myLibrary.push(newBook);
    presentLibrary();
}

function checkIfRead(book){
    let node = "";
    if(book.readCheck()){
        node = "Have Read: "+"Yes";
    }
    else{
        node = "Have Read: "+"No";
    }
    return node;
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
            let check = checkIfRead(book);
            node = document.createTextNode(check);
            read.appendChild(node);
            let readToggleButton = document.createElement("BUTTON");
            node = document.createTextNode("Toggle Read Completion");
            readToggleButton.appendChild(node);
            readToggleButton.addEventListener("click", function(e){
                updateReadToggle(e.target.parentElement.id);
                node = checkIfRead(book);
                read.textContent = node;
            })

            let deleteBookButton = document.createElement("BUTTON");
            node = document.createTextNode("Remove Book");
            deleteBookButton.appendChild(node);
            deleteBookButton.addEventListener("click", function(e){
                removeBook(e.target.parentElement.id);
            });
            bookCard.appendChild(name);
            bookCard.appendChild(writer);
            bookCard.appendChild(year);
            bookCard.appendChild(read);
            bookCard.appendChild(readToggleButton);
            bookCard.appendChild(deleteBookButton);
            library.appendChild(bookCard);
        }
    });
}

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");
const commitBookButton = document.querySelector("#commitBook");
const cancelNewBookButton = document.querySelector("#cancelBook");

newBookButton.addEventListener("click", ()=>{
    dialog.showModal();
});

cancelNewBookButton.addEventListener("click", ()=>{
    dialog.close();
});

commitBookButton.addEventListener("click", ()=>{
    let bookName = document.querySelector("#book_name").value;
    let bookWriter = document.querySelector("#book_writer").value;
    let bookYear = document.querySelector("#book_year").value;
    addBookToLibrary(bookName,bookWriter,bookYear);
    document.querySelector("#book_name").value = "";
    document.querySelector("#book_writer").value ="";
    document.querySelector("#book_year").value ="";
    dialog.close();

})

addBookToLibrary("B3", "Clown 1", "1995");
addBookToLibrary("B4","Clown 3", "2005");