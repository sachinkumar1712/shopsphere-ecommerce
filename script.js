
// ==========================================
// SHOPSPHERE - MAIN JAVASCRIPT
// ==========================================

console.log("ShopSphere JavaScript Connected!");


// ==========================================
// NAVIGATION BAR
// ==========================================

// Select HTML Elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const cartBtn = document.getElementById("cartBtn");
const wishlistBtn = document.getElementById("wishlistBtn");


// Mobile Menu Toggle
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close Mobile Menu When Link is Clicked
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    });

});


// Search Functionality - Placeholder
searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter a product name.");
        return;
    }

    alert("You searched for: " + searchText);

});


// Cart Button - Placeholder
cartBtn.addEventListener("click", function () {

    alert("Cart feature coming soon!");

});


// Wishlist Button - Placeholder
wishlistBtn.addEventListener("click", function () {

    alert("Wishlist feature coming soon!");

});

console.log("ShopSphere Navbar Loaded!");


// ==========================================
// HERO SECTION
// ==========================================

// Select Shop Now Button
const shopNowBtn = document.getElementById("shopNowBtn");


// Smooth Scroll to Products Section
shopNowBtn.addEventListener("click", function (event) {

    event.preventDefault();

    const productsSection = document.getElementById("products");

    productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

console.log("ShopSphere Hero Section Loaded!");


// ==========================================
// STEP 4 - DYNAMIC CATEGORY CARDS
// ==========================================

// Category Data
const categories = [
    {
        id: 1,
        name: "Fashion",
        description: "Trendy clothing collections",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
    },
    {
        id: 2,
        name: "Electronics",
        description: "Latest gadgets and devices",
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600"
    },
    {
        id: 3,
        name: "Shoes",
        description: "Step into your style",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
        id: 4,
        name: "Accessories",
        description: "Complete your look",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    }
];


// Select Category Elements
const categoriesGrid = document.getElementById("categoriesGrid");
const selectedCategory = document.getElementById("selectedCategory");


// Display Categories Function
function displayCategories() {

    categoriesGrid.innerHTML = "";

    categories.forEach(function (category) {

        // Create Category Button
        const card = document.createElement("button");

        card.type = "button";
        card.className = "category-card";

        // Add Category Content
        card.innerHTML = `
            <img
                src="${category.image}"
                alt=""
                loading="lazy"
            >

            <div class="category-overlay"></div>

            <div class="category-content">
                <h3>${category.name}</h3>
                <p>${category.description}</p>

                <span class="category-arrow">
                    Explore Now →
                </span>
            </div>
        `;

        // Accessibility
        card.setAttribute(
            "aria-label",
            "Explore " + category.name
        );

        // Category Click Event
        card.addEventListener("click", function () {

            selectedCategory.textContent =
                "You selected: " + category.name;

            console.log("Selected Category:", category.name);

        });

        // Add Card to Category Grid
        categoriesGrid.appendChild(card);

    });

}


// Load Category Cards
displayCategories();

console.log("ShopSphere Categories Loaded!");



// STEP 5 - FEATURED PRODUCTS
// Coming Soon

