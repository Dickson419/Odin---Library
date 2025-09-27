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
// Book.prototype.info = function(){
//     return (this.title + " by " + this.author + ", " + 
//         this.pages + " pages. Finished: " + this.read
//         );
// }

//Function to add a new book to the library array
function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooksOnPage();
}

//Display the library array
/*
----- EXAMPLE OF WHAT THIS CREATES -----
<div class="card">
  <p>title : 1984</p>
  <p>author : George Orwell</p>
  <p>pages : 328</p>
</div>
----- -----
*/
function displayBooksOnPage(){
    //select the books class
    const books = document.querySelector(".books");
    books.innerHTML = ''; //clear existing content

    //loop over the libary array and display to the 'card'
    //for each item in the array create an constant called card with a div element
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        //make a new class and add new elements to this div
        card.classList.add("card"); //makes a new css class called card to the new div
        books.appendChild(card); //appends the new card element as a child of the .books container

        //loop over evert key value pair in the library
        for(let key in myLibrary){
            console.log( `${key} : ${myLibrary[key]}`); //for trouble shooting
            const para = document.createElement("p"); //create a new p element to display each book
            para.textContent = (`${key} : ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })


}


/* ----- The Form ----- */

//add an event listener to display the form to add a new book to the library
const addBookBtn = document.querySelector(".add-book-btn"); //returns the first element that matches
addBookBtn.addEventListener("click", displayTheForm);

function displayTheForm(){
    document.getElementById("add-book-form").style.display="";
}

//add the event listener for the form in order to add to the library array
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", takeFormData);

function takeFormData(){
    //take the information entered by the user and add this to the library array
    let title = document.getElementById("Title").value;
    let author = document.getElementById("Author").value;
    let pages = document.getElementById("Pages").value;
    let read = document.getElementById("Read").value;

    //edge case if the form is not compleated 
    if((title == "") || (author =="") || (pages =="") || (read=="")){
        return;
    }

    //call function to add the book information to the library 
    addBookToLibrary(title,author,pages,read);

    //reset the form after the submission 
    document.getElementById("add-book").reset();
}

// ----- reset button -----
const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", clearForm);

function clearForm(){
    document.getElementById("add-book").reset();
}













//check files are linked and working
//const TheHobbit = new Book("The Hobbit", "JRR Tolkin", "450", "yes");
// console.log(TheHobbit.info());

// addBookToLibrary("The Hobbit", "JRR Tolkin", "450", "yes")
// addBookToLibrary("LORT", "JRR Tolkin", "450", "yes")
// addBookToLibrary("Heart of Darkness", "J Conrad", "450", "yes")
// addBookToLibrary("Midnight Tides", "Steven Erikson", "450", "yes")
// displayBooksOnPage();
