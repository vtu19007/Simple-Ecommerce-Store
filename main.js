// static/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Add to Cart button click handler
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = button.getAttribute('data-product-id');
            addToCart(productId);
        });
    });

    // Example function to add product to cart (simulated with localStorage)
    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        cart[productId] = cart[productId] ? cart[productId] + 1 : 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    }
});
