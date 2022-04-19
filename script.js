const pTest = document.querySelector('p');



let myLibrary = [];

class Book{
    constructor(title, author, numOfPages, bookStatus){
        this.title = title,
        this.author = author,
        this.numOfPages = numOfPages,
        this.bookStatus = bookStatus;
    }
    addBook(){
        return `Title: ${this.title} \n Author: ${this.author} \n Pages: ${this.numOfPages} \n Read Status: ${this.bookStatus}`;
    }
}

let eightySix = new Book('86: Eighty-Six', 'Asato Asato', '326', 'Read');
console.log(eightySix.addBook())