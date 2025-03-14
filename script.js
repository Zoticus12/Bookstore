document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Handle "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let bookTitle = this.parentElement.querySelector("p").textContent;
            cart.push(bookTitle);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(bookTitle + " has been added to your cart!");
        });
    });

    // Display cart items on cart.html
    let cartContainer = document.getElementById("cart-container");
    if (cartContainer) {
        cartContainer.innerHTML = "";
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            let cartList = document.createElement("ul");
            cart.forEach((item, index) => {
                let listItem = document.createElement("li");
                listItem.textContent = item;
                cartList.appendChild(listItem);
            });
            cartContainer.appendChild(cartList);
        }
    }

    // Handle "Clear Cart" button
    let clearCartBtn = document.getElementById("clear-cart");
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", function () {
            localStorage.removeItem("cart");
            cart = [];
            location.reload();
        });
    }
});
