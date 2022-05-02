const mainContainer = document.getElementById('main-container');
const formOpenBtn = document.getElementById('formOpenBtn');
const formCloseBtn = document.getElementById('formCloseBtn');
const formHolder = document.getElementById('formHolder')
const addBookButton = document.getElementById('button');
let htmlBook = '';

// Book Array
let myLibrary = [];

// Book Class
class Book{
    constructor(title, author, numOfPages, bookStatus, bookID){
        this.title = title,
        this.author = author,
        this.numOfPages = numOfPages,
        this.bookStatus = bookStatus,
        this.bookID = bookID; 
    }
}

// Adds the new book to the array and generates a unique number ID for each book
function addBook (ev){
    ev.preventDefault();
    let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let bookPages = document.getElementById('bookPages').value;
    let bookRead = document.getElementById('bookRead').value;
    let bookID = Math.floor(Math.random() * 10000);
    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead, bookID);
    myLibrary.push(newBook);
    myLibrary.forEach(bookCardCreater(newBook));
    formClose();   
}

// Creates the new book card which displays the user input
function bookCardCreater(newBook){
        htmlBook += 
        /* START */`
        <div class="bookHolder" id="${newBook.bookID}">
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
                <button type="button" onclick="deleteBook(${newBook.bookID})"> Delete Book </button>
            </div>
        </div>       
        ` /* END */
        mainContainer.innerHTML = htmlBook;  
}

// Grabs the book's unique ID number and deletes the book from the display and myLibrary array
function deleteBook(bookID){
    let confirmationBox = confirm('Are you sure you want to delete this book?');
    let bookDelete = document.getElementById(bookID);
    if (confirmationBox === true){
        /* Goes through the array, finds the newBook.bookID that matches the bookID,
        and gets the index of the object, and removes it from the array, then returns the updated array*/
        myLibrary.forEach((x)=>{
            if (x.bookID === bookID){
                let indexOfBook = myLibrary.indexOf(x);
                myLibrary.splice(indexOfBook, 1)
                return myLibrary;
            }
        })
       mainContainer.removeChild(bookDelete);
       return myLibrary;
    } else {
        return ;
    }
}

// Makes the form appear
function formPopup (){
    formHolder.style.display = "block";
}

// Closes the form
function formClose (){
    formHolder.style.display = "none";
}
addBookButton.addEventListener('click', addBook);
formOpenBtn.addEventListener('click', formPopup);
formCloseBtn.addEventListener('click', formClose);




