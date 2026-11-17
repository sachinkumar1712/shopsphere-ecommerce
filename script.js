
// ShopSphere - Step 2

console.log("ShopSphere Navbar Loaded!");

// Select HTML elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

// Mobile menu toggle
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    });

});

// Search placeholder functionality
searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter a product name.");
        return;
    }

    alert("You searched for: " + searchText);

});

// Cart and wishlist placeholders
document.getElementById("cartBtn").addEventListener("click", function () {
    alert("Cart feature coming soon!");
});

document.getElementById("wishlistBtn").addEventListener("click", function () {
    alert("Wishlist feature coming soon!");
});
