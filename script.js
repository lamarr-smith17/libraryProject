const pTest = document.getElementById('test');
const mainContainer = document.getElementById('main-container');

const b = document.getElementById('button');
let myLibrary = [];

class Book{
    constructor(title, author, numOfPages, bookStatus){
        this.title = title,
        this.author = author,
        this.numOfPages = numOfPages,
        this.bookStatus = bookStatus;
    }
}
let addBook = function (ev){
    ev.preventDefault();
    // let newBook = {
    //      bookTitle: document.getElementById('bookTitle').value,
    //      bookAuthor: document.getElementById('bookAuthor').value,
    //      pageNum: document.getElementById('bookPages').value,
    //      bookStatus: document.getElementById('bookRead').value
         
    // }
    let newBook = new Book(document.getElementById('bookTitle').value, document.getElementById('bookAuthor').value, document.getElementById('bookPages').value, document.getElementById('bookRead').value);
    myLibrary.push(newBook);
    mainContainer.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let bookEntry = document.createElement('div');
        let titleText = document.createElement('p');
        let authorText = document.createElement('p');
        let pageText = document.createElement('p');
        let readText = document.createElement('p');
        mainContainer.appendChild(bookEntry);
        bookEntry.append(titleText, authorText, pageText, readText);
        bookEntry.setAttribute("id", "div" + i);
        bookEntry.setAttribute("class", "bookHolder");
        titleText.innerText = myLibrary[i].title;
        // authorText.innerText = myLibrary[i].getAuthor();
        // pageText.innerText = myLibrary[i].getNumOfPages();
        // readText.innerText = myLibrary[i].getBookStatus();
    
    }
    
}

b.addEventListener('click', addBook);






