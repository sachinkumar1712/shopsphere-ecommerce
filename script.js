
// ShopSphere JavaScript

// Navbar elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const cartBtn = document.getElementById("cartBtn");
const wishlistBtn = document.getElementById("wishlistBtn");

// Product elements
const productsGrid = document.getElementById("productsGrid");
const productMessage = document.getElementById("productMessage");
const resultsCount = document.getElementById("resultsCount");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

// Category elements
const categoriesGrid = document.getElementById("categoriesGrid");
const selectedCategory = document.getElementById("selectedCategory");

// Navbar
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Cart and wishlist
cartBtn.addEventListener("click", function () {
    alert("Cart feature coming soon!");
});

wishlistBtn.addEventListener("click", function () {
    alert("Wishlist feature coming soon!");
});

// Hero button
const shopNowBtn = document.getElementById("shopNowBtn");

shopNowBtn.addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("products").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Category data
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

// Product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1999,
        oldPrice: 2999,
        rating: 4.5,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
    },
    {
        id: 2,
        name: "Classic Sneakers",
        category: "Shoes",
        price: 2499,
        oldPrice: 3499,
        rating: 4.7,
        badge: "Trending",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
        id: 3,
        name: "Denim Jacket",
        category: "Fashion",
        price: 1799,
        oldPrice: 2599,
        rating: 4.4,
        badge: "New",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600"
    },
    {
        id: 4,
        name: "Classic Watch",
        category: "Accessories",
        price: 2999,
        oldPrice: 3999,
        rating: 4.8,
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    },
    {
        id: 5,
        name: "Smartphone",
        category: "Electronics",
        price: 15999,
        oldPrice: 18999,
        rating: 4.6,
        badge: "Hot",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
    },
    {
        id: 6,
        name: "Casual T-Shirt",
        category: "Fashion",
        price: 699,
        oldPrice: 999,
        rating: 4.3,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
    },
    {
        id: 7,
        name: "Running Shoes",
        category: "Shoes",
        price: 3299,
        oldPrice: 4299,
        rating: 4.7,
        badge: "Trending",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600"
    },
    {
        id: 8,
        name: "Stylish Sunglasses",
        category: "Accessories",
        price: 899,
        oldPrice: 1299,
        rating: 4.2,
        badge: "New",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    }
];

// Filter state
let searchQuery = "";
let activeCategory = "All";

// Format prices
function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);
}

// Show categories
function displayCategories() {
    categoriesGrid.innerHTML = "";

    categories.forEach(function (category) {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "category-card";
        card.setAttribute("aria-label", "Explore " + category.name);
        card.setAttribute("aria-pressed", String(activeCategory === category.name));

        if (activeCategory === category.name) {
            card.classList.add("active");
        }

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
                <span class="category-arrow">Explore Now →</span>
            </div>
        `;

        card.addEventListener("click", function () {
            activeCategory = category.name;

            selectedCategory.textContent =
                "You selected: " + category.name;

            displayCategories();
            renderProducts();

            document.getElementById("products").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

        categoriesGrid.appendChild(card);
    });
}

// Get matching products
function getFilteredProducts() {
    return products.filter(function (product) {
        const matchesCategory =
            activeCategory === "All" ||
            product.category === activeCategory;

        const searchText = (
            product.name + " " + product.category
        ).toLowerCase();

        const matchesSearch = searchText.includes(searchQuery);

        return matchesCategory && matchesSearch;
    });
}

// Show products
function renderProducts() {
    const filteredProducts = getFilteredProducts();

    productsGrid.innerHTML = "";
    productMessage.textContent = "";

    resultsCount.textContent =
        "Showing " + filteredProducts.length +
        " of " + products.length + " products";

    if (filteredProducts.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.className = "no-products";
        emptyMessage.textContent =
            "No products found. Try another search or reset the filters.";

        productsGrid.appendChild(emptyMessage);
        return;
    }

    filteredProducts.forEach(function (product) {
        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="product-badge">
                    ${product.badge}
                </span>
            </div>

            <div class="product-details">
                <p class="product-category">
                    ${product.category}
                </p>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="product-rating">
                    ★ ${product.rating}
                    <span>/ 5</span>
                </div>

                <div class="product-price">
                    <span class="current-price">
                        ${formatPrice(product.price)}
                    </span>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>
                </div>

                <button
                    type="button"
                    class="add-to-cart"
                    data-id="${product.id}"
                >
                    Add to Cart
                </button>
            </div>
        `;

        productsGrid.appendChild(card);
    });
}

// Search products
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    searchQuery = searchInput.value.trim().toLowerCase();

    renderProducts();

    document.getElementById("products").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Reset filters
resetFiltersBtn.addEventListener("click", function () {
    searchQuery = "";
    activeCategory = "All";
    searchInput.value = "";
    selectedCategory.textContent = "";

    displayCategories();
    renderProducts();
});

// Add to cart demo
productsGrid.addEventListener("click", function (event) {
    const button = event.target.closest(".add-to-cart");

    if (!button) {
        return;
    }

    const productId = Number(button.dataset.id);

    const selectedProduct = products.find(function (product) {
        return product.id === productId;
    });

    if (!selectedProduct) {
        return;
    }

    productMessage.textContent =
        selectedProduct.name +
        " selected! Cart functionality coming soon.";
});

// Load website content
displayCategories();
renderProducts();

console.log("ShopSphere Loaded Successfully!");
