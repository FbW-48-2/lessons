// Book  class
// object {  title : "learn js in 5 days" , author :" someone" ,isbn :"123123" }
class Book{
    constructor(title , author ,isbn ){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

// child class 
// [] array of books 
class BookList  {
     // list is array 
    constructor(){
        //this.books = list // the array of objects : books  []
        this.books = []
      
    }
    addBook(book){
        this.books.push(book)

    }
    deleteBook(isbn){
      

    }
}

class BooksUI extends BookList{
    constructor(books){
        super(books)
    }
    printBooks(){
        console.log( this.books.length);
        this.books.forEach(element => {
            console.log(element.title + " by "+ element.author);
        });
    }

}

let book1 = new Book(" the best of javascript" ,"John Smith" ,"ab1234");
let book2 = new Book("learn js in 5 days","someone", "sd123133")
console.log(book1);
console.log(book2);

let list = new BookList();
console.log( "empty array", list);
list.addBook(book1)
list.addBook(book2)
console.log(   list.books.length);
 
// the BooksUI
let ui = new BooksUI() // empty array 
 
ui.addBook({ title : "You Don't Know JS" , author:"Kyle Simpson" ,isbn:"we34343"})
console.log(ui.books);
ui.printBooks()
