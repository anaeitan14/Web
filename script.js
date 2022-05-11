let title = document.getElementById('title');
let author = document.getElementById('author');
let category = document.getElementById('category');
let searchBox = document.getElementById('search');
let addBook = document.getElementById('addbook');
let count = document.getElementById('count');
let bookResult = document.getElementById('found');
let search = document.getElementById('searchButton');


search.addEventListener("click", Search);
addBook.addEventListener("click", newBook);
let library = [];

function Book(title, author, category) {
    this.title=title.value;
    this.author=author.value;
    this.category=category.value;
}


function newBook() {
    if(!(title.value == "" || author.value == "" || category.value == "")) {
        let addBook = new Book(title, author, category);
        library.push(addBook);
        count.innerHTML=library.length + " Books";  
    }
}

function Search() {
    bookResult.innerHTML="";
    let userSearch = searchBox.value.toLowerCase();

    for(let i=0;i<library.length;i++){
        let bookTitle = library[i].title.toLowerCase();
        let bookAuthor = library[i].author.toLowerCase();
        let bookCategory = library[i].category.toLowerCase();

        if (bookTitle.includes(userSearch) || bookAuthor.includes(userSearch)||
            bookCategory.includes(userSearch)) {
                bookResult.innerHTML+="Title: " +bookTitle+", Author: " + bookAuthor +", Category: " + bookCategory;
        }
    }
}



console.log(library);




