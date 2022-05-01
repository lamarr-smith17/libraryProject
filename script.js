const mainContainer = document.getElementById('main-container');
const formOpenBtn = document.getElementById('formOpenBtn');
const formCloseBtn = document.getElementById('formCloseBtn');
const formHolder = document.getElementById('formHolder')
const addBookButton = document.getElementById('button');
let htmlBook = '';
let myLibrary = [];


// Book array and book class
class Book{
    constructor(title, author, numOfPages, bookStatus){
        this.title = title,
        this.author = author,
        this.numOfPages = numOfPages,
        this.bookStatus = bookStatus;
    }
}
// let eight = new Book('86: Eighty-Six', 'Asato Asato', '326', 'Read');



// Add book function that pushes the book to the array and creates the new book object
function addBook (ev){
    ev.preventDefault();
    let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let bookPages = document.getElementById('bookPages').value;
    let bookRead = document.getElementById('bookRead').value;
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
    myLibrary.forEach(bookCardCreater(newBook));
    formClose();
    
}
// Creates the new book card which displays the title, author, page count, and read status
function bookCardCreater(newBook){
        htmlBook += `
        <div class="bookHolder" id="bookHolder">
            <div class="titleDiv">
                <p class="bookLabel">Title: <span class="bookInfo">${newBook.title}</span></p>
            </div>
            <div class="authorDiv">
            <p class="bookLabel">Author: <span class="bookInfo">${newBook.author}</span></p>
            </div>
            <div class="pageDiv">
                <p class="bookLabel">Pages: <span class="bookInfo">${newBook.numOfPages}</span></p>
            </div>
            <div class="readDiv">
                <p class="bookLabel">Read: <span class="bookInfo">${newBook.bookStatus}</span></p>
            </div>
            <div class="deleteDiv">
                <button type="button" onclick="deleteBook()"> Delete Book </button>
            </div>
        </div>       
        `
        // Each time a new book is added, this clears the HTML so a book does not repeat it's entry
        mainContainer.innerHTML = ""; 
        mainContainer.innerHTML = htmlBook;  
}

function deleteBook(){
    let confirmationBox = confirm('Are you sure you want to delete this book?');
    if (confirmationBox === true){
        // Stuck
    } else {
        return ;
    }
}

function formPopup (){
    formHolder.style.display = "block";
}
function formClose (){
    formHolder.style.display = "none";
}
addBookButton.addEventListener('click', addBook);
formOpenBtn.addEventListener('click', formPopup);
formCloseBtn.addEventListener('click', formClose);




