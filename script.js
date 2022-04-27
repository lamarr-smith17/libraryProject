const pTest = document.getElementById('test');
const mainContainer = document.getElementById('main-container');




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
let grimgar = new Book('Grimgar', 'Ao', '326', 'Read');
let tensei = new Book('Mushoku Tensei', 'Rudeus', '326', 'Unread');
let myLibrary = [eightySix.addBook(), grimgar.addBook(), tensei.addBook()];
for (let i = 0; i < myLibrary.length; i++){
    let bookEntry = document.createElement('div');
    let titleText = document.createElement('p');
    mainContainer.appendChild(bookEntry);
    bookEntry.appendChild(titleText);
    bookEntry.setAttribute("id", "div" + i);
    bookEntry.setAttribute("class", "bookHolder");
    titleText.innerText = myLibrary[i]
    console.log(myLibrary[i].title)
}

console.log(eightySix.title)
