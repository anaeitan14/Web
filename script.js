let title = document.getElementById('title');
let author = document.getElementById('author');
let category = document.getElementById('category');
let searchBox = document.getElementById('search');
let newBook = document.getElementById('addbook');
let count = document.getElementById('count');
let bookResult = document.getElementById('found');
let search = document.getElementById('searchButton');


search.addEventListener("click", searchBook);
newBook.addEventListener("click", addBook);
let books = [];

function Book(title, author, category) {
    this.title=title.value;
    this.author=author.value;
    this.category=category.value;
}


function addBook() {
    let newBook = new Book(title, author, category);
    books.push(newBook);
    count.innerHTML=books.length;
}

function searchBook() {
    for(let i=0;i<books.length;i++){
        if(searchBox.value == books[i].name || searchBox.value == books[i].author||
            searchBox.value == books[i]) {
                bookResult.innerHTML=this.name + this.author + this.category;
        }
    }
}



console.log(books);




