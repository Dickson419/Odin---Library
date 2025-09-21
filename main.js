let myLibrary = [];

//Object constructor
function Book(title, author, pages, read){
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    //IF methods are used in a class they are similar to Java private methods

    // this.info = function(){
    //     return (this.title + " by " + this.author + ", " + this.pages + " pages. Finished: " + this.read
    //     )
    // }


}

//Prototype can be thought as inherritance in Java
Book.prototype.info = function(){
    return (this.title + " by " + this.author + ", " + 
        this.pages + " pages. Finished: " + this.read
        )
}

//Function to add a new book to the library
function addBookToLibrary(){

}





//check files are linked and working
const TheHobbit = new Book("The Hobbit", "JRR Tolkin", "450", "yes" )
console.log(TheHobbit.info())
