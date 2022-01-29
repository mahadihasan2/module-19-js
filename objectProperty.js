var books = {
    name:"the jugle book",
    price : 500,
    page : 300,
    publication : "boibitan",
    location : "maLibary",
}

// console.log(books);
console.log(books.price);
var booksPage = books.page;
console.log(booksPage);

// Three diffarent way for property Value change

// 1st way
 
books.name="ict book";
console.log(books);

// 2nd way 

books["price"]=600;
console.log(books);

// 3rd way 

// var booksPublication = "publication";
// books[publication]= 'gainbitan';
// console.log(booksPublication);

