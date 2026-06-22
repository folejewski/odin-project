const submit = document.querySelector("#submit");
const formToggleButton = document.querySelector("#toggleButton");
const form = document.querySelector(".form");
const bookForm = document.getElementById("bookForm");
const libraryGrid = document.body.querySelector(".library-grid");

submit.addEventListener("click", addBookToLibrary);
formToggleButton.addEventListener("click", toggleForm);

const myLibrary = [];
renderLibrary();

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

Book.prototype.toggleRead = function() {
    this.wasRead = !this.wasRead;
};

function addBookToLibrary(event) {
    event.preventDefault();
    const formData = new FormData(bookForm);
    const wasReadValue = formData.get("wasRead") === "on";
    const book = new Book(formData.get("author"), formData.get("title"), parseInt(formData.get("numberOfPages")), wasReadValue);
    myLibrary.push(book);
    renderLibrary();
}

function renderLibrary() {
    libraryGrid.innerHTML = "";

    if (myLibrary.length === 0) {
        libraryGrid.innerHTML = "<p>No books yet. You can add one above!</p>";
        return;
    }

    myLibrary.forEach((book, index) => {

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
        <h2>${index + 1}</h2>
        <div>
            <p>${book.author}</p>
            <p>${book.title}</p>
            <p>${book.numberOfPages} pages</p>
            <p>${book.wasRead ? "Read" : "Not read yet"}</p>
            <div class="button-container">
                <button type="button" class="toggle-read-status" onclick="toggleReadStatus('${book.id}')">Toggle Read Status</button>
                <button type="button" class="book-delete" onclick="deleteBook('${book.id}')">Delete Book</button>
            </div>
        </div>
        `

        libraryGrid.appendChild(bookCard);
    })
}

function toggleForm() {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function toggleReadStatus(id) {
    const book = myLibrary.find((book) => book.id === id);
    if (book) {
        book.toggleRead(); 
        renderLibrary();
    }
}

function deleteBook(id) {
    const index = myLibrary.findIndex((book) => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        renderLibrary();
    }
}

