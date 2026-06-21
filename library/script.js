const submit = document.querySelector("#submit");
const bookForm = document.getElementById("bookForm");

submit.addEventListener("click", addBookToLibrary);

const myLibrary = [];
let wasReadValue;

function Book(author, title, numberOfPages, wasRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = self.crypto.randomUUID();
    // if the input would be empty for author or title it changes to Unknown, and number of pages to 0 instead of leaving empty string.
    this.author = author || "Unknown";
    this.title = title || "Unknown";
    this.numberOfPages = numberOfPages || 0;
    this.wasRead = wasRead;
}

function addBookToLibrary(event) {
    event.preventDefault();
    const formData = new FormData(bookForm);
    for (const [key, value] of formData) {
        console.log(`${key}: ${value}\n`);
    }
    console.log(formData.get("author"));
    console.log(formData.get("title"));
    console.log(formData.get("numberOfPages"));
    console.log(formData.get("wasRead"));
    if (formData.get("wasRead") === "on") {
        wasReadValue = true;
    } else {
        wasReadValue = false;
    }
    const book = new Book(formData.get("author"), formData.get("title"), parseInt(formData.get("numberOfPages")), wasReadValue)
    myLibrary.push(book);
}
// to do later
// 1 clean up js
// 2 add showing books on html and adding books to library changing if they are in the array or not
// 3 make the html pretty
// 4 toggle the read button and delete book button for each book
// 5 change the file to typescript

