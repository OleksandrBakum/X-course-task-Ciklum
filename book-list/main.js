const root = document.getElementById("root")

async function getBooks(url) {
    try { 
        let response = await fetch(url);
        if (response.status === 200) {
            let arrayBooks = await response.json();
            displayBooks(arrayBooks.books);
        }
        else {
            console.log("Error: " + response.status);
        }
    } catch (error) {
        console.log("Error ", error);
    }
}

function displayBooks(books) {
    for (const book of books) {
        const bookItem = createBook(book);
        root.appendChild(bookItem);
      }
}

function createBook (book) {
        const container = document.createElement("div");
        container.classList.add("book-item");
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("cover-container");
        const cover = document.createElement("img");
        cover.classList.add("book-cover", "pointer");
        cover.src = book.image;
        cover.alt = book.title;
        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container")
        const title = document.createElement("h3");
        const author = document.createElement("p");
        
        const priceButtonContainer = document.createElement("div");
        priceButtonContainer.classList.add("price-button-container");

        const price = document.createElement("p");
        price.classList.add("bold-text", "price-text");
        const button = document.createElement("button");
        button.classList.add("main-button", "view-button", "bold-text", "rounded", "pointer");
        title.textContent = book.title;
        author.textContent = book.author;
        price.textContent = book.price;
        button.textContent = "View";
        container.appendChild(imageContainer);
        imageContainer.appendChild(cover);
        textContainer.appendChild(title);
        textContainer.appendChild(author);
        container.appendChild(textContainer);
        container.appendChild(priceButtonContainer);
        priceButtonContainer.appendChild(price);
        priceButtonContainer.appendChild(button);
        return container;
}

getBooks("../books.json");
