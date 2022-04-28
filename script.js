const pTest = document.getElementById('test');
const mainContainer = document.getElementById('main-container');
const b = document.getElementById('button');
const bookEntry = document.createElement('div');
const titleText = document.createElement('p');
const authorText = document.createElement('p');
const pageText = document.createElement('p');
const readText = document.createElement('p');
mainContainer.appendChild(bookEntry);
bookEntry.append(titleText, authorText, pageText, readText);

// Book array and book class
class Book{
    constructor(title, author, numOfPages, bookStatus){
        this.title = title,
        this.author = author,
        this.numOfPages = numOfPages,
        this.bookStatus = bookStatus;
    }
}
let eight = new Book('86: Eighty-Six', 'Asato Asato', '326', 'Read');

let myLibrary = [eight];


// Add book function that pushes the book to the array and creates the new book object
function addBook (ev){
    ev.preventDefault();
    
    let newBook = new Book(document.getElementById('bookTitle').value, document.getElementById('bookAuthor').value, document.getElementById('bookPages').value, document.getElementById('bookRead').value);
    myLibrary.push(newBook);

    // Each time a new book is added, this clears the HTML so a book does not repeat it's entry
    mainContainer.innerHTML = ""; 

    bookCardCreater();
    
    
}
// Creates the new book card which displays the title, author, page count, and read status
function bookCardCreater(){
    for (let i = 0; i < myLibrary.length; i++){
        
        bookEntry.setAttribute("id", "div" + i);
        bookEntry.setAttribute("class", "bookHolder");
        titleText.innerText = myLibrary[i].title;
        authorText.innerText = myLibrary[i].author;
        pageText.innerText = myLibrary[i].numOfPages;
        readText.innerText = myLibrary[i].bookStatus;
    
    }
}

bookCardCreater()
b.addEventListener('click', addBook);






