const booksNumber = document.getElementById("count-books"),
totalPrice = document.getElementById("total-price"),
popUp = document.querySelector(".pop-up");
let n = 1,
amount = 42; // change later with fetch and json()

function calculateTotalPrice() {
    n = booksNumber.value;
    let price = 29.99; // change later with fetch and json()
    totalPrice.textContent = `${(n * price).toFixed(2)}`;
}

function validateInput() {
    booksNumber.value = booksNumber.value.replace(/^0+/,'')
    booksNumber.style.color = "black";
    popUp.classList.remove("show");
    if (booksNumber.value > amount) {
        booksNumber.value = amount;           
        booksNumber.style.color = "red";
        popUp.classList.add("show");
    }
}

booksNumber.addEventListener("change", validateInput);
booksNumber.addEventListener("change", calculateTotalPrice);
booksNumber.addEventListener("keyup", validateInput);
booksNumber.addEventListener("keyup", calculateTotalPrice);
