
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
const sortSelect = document.getElementById("sortSelect");

// Category elements
const categoriesGrid = document.getElementById("categoriesGrid");
const selectedCategory = document.getElementById("selectedCategory");

// Modal elements
const productModal = document.getElementById("productModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalProductImage = document.getElementById("modalProductImage");
const modalProductCategory = document.getElementById("modalProductCategory");
const modalProductName = document.getElementById("modalProductName");
const modalProductRating = document.getElementById("modalProductRating");
const modalProductDescription = document.getElementById("modalProductDescription");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductOldPrice = document.getElementById("modalProductOldPrice");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");

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
        description: "Enjoy clear sound, comfortable ear cushions and a stylish wireless design. Perfect for music, work and everyday listening.",
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
        description: "Comfortable everyday sneakers with a modern look and lightweight feel. A great choice for casual outfits.",
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
        description: "A versatile denim jacket designed for everyday styling. Pair it with jeans, trousers or a simple T-shirt.",
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
        description: "A stylish wristwatch with a timeless appearance. A simple accessory that complements casual and formal outfits.",
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
        description: "A modern smartphone for daily communication, photography and entertainment, with a sleek and practical design.",
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
        description: "A comfortable casual T-shirt with a clean and simple look. Easy to style for college, travel and everyday wear.",
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
        description: "Lightweight running shoes designed for active days. A sporty look with comfort for walking and everyday movement.",
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
        description: "Fashionable sunglasses with a modern frame design. A stylish addition to your outdoor and travel outfits.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    }
];

// Filter state
let searchQuery = "";
let activeCategory = "All";
let sortBy = "default";
let selectedProductId = null;
let previousFocus = null;

// Format prices
function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);
}

// Find product
function findProduct(productId) {
    return products.find(function (product) {
        return product.id === productId;
    });
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

// Filter and sort products
function getFilteredProducts() {
    const filteredProducts = products.filter(function (product) {
        const matchesCategory =
            activeCategory === "All" ||
            product.category === activeCategory;

        const searchText = (
            product.name + " " + product.category
        ).toLowerCase();

        const matchesSearch = searchText.includes(searchQuery);

        return matchesCategory && matchesSearch;
    });

    const sortedProducts = [...filteredProducts];

    if (sortBy === "low") {
        sortedProducts.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (sortBy === "high") {
        sortedProducts.sort(function (a, b) {
            return b.price - a.price;
        });
    } else if (sortBy === "rating") {
        sortedProducts.sort(function (a, b) {
            return b.rating - a.rating;
        });
    } else if (sortBy === "name") {
        sortedProducts.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    }

    return sortedProducts;
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

                <div class="product-buttons">
                    <button
                        type="button"
                        class="view-details"
                        data-id="${product.id}"
                    >
                        View Details
                    </button>

                    <button
                        type="button"
                        class="add-to-cart"
                        data-id="${product.id}"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        `;

        productsGrid.appendChild(card);
    });
}

// Open product modal
function openProductModal(productId) {
    const product = findProduct(productId);

    if (!product) {
        return;
    }

    selectedProductId = product.id;
    previousFocus = document.activeElement;

    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductCategory.textContent = product.category;
    modalProductName.textContent = product.name;
    modalProductRating.textContent = "★ " + product.rating + " / 5";
    modalProductDescription.textContent = product.description;
    modalProductPrice.textContent = formatPrice(product.price);
    modalProductOldPrice.textContent = formatPrice(product.oldPrice);

    productModal.hidden = false;
    document.body.classList.add("modal-open");

    closeModalBtn.focus();
}

// Close product modal
function closeProductModal() {
    productModal.hidden = true;
    document.body.classList.remove("modal-open");

    selectedProductId = null;

    if (previousFocus && previousFocus.isConnected) {
        previousFocus.focus();
    }

    previousFocus = null;
}

// Product button clicks
productsGrid.addEventListener("click", function (event) {
    const detailsButton = event.target.closest(".view-details");

    if (detailsButton) {
        openProductModal(Number(detailsButton.dataset.id));
        return;
    }

    const cartButton = event.target.closest(".add-to-cart");

    if (cartButton) {
        const product = findProduct(Number(cartButton.dataset.id));

        if (product) {
            productMessage.textContent =
                product.name + " selected! Cart functionality coming soon.";
        }
    }
});

// Modal buttons
closeModalBtn.addEventListener("click", closeProductModal);

modalAddToCartBtn.addEventListener("click", function () {
    const product = findProduct(selectedProductId);

    if (!product) {
        return;
    }

    closeProductModal();

    productMessage.textContent =
        product.name + " selected! Cart functionality coming soon.";
});

// Close when clicking outside
productModal.addEventListener("click", function (event) {
    if (event.target === productModal) {
        closeProductModal();
    }
});

// Close with Escape and keep focus inside
document.addEventListener("keydown", function (event) {
    if (productModal.hidden) {
        return;
    }

    if (event.key === "Escape") {
        closeProductModal();
        return;
    }

    if (event.key === "Tab") {
        const focusableElements = [
            closeModalBtn,
            modalAddToCartBtn
        ];

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
});

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

// Sort products
sortSelect.addEventListener("change", function () {
    sortBy = sortSelect.value;
    renderProducts();
});

// Reset filters
resetFiltersBtn.addEventListener("click", function () {
    searchQuery = "";
    activeCategory = "All";
    sortBy = "default";

    searchInput.value = "";
    sortSelect.value = "default";
    selectedCategory.textContent = "";

    displayCategories();
    renderProducts();
});

// Load website content
displayCategories();
renderProducts();

console.log("ShopSphere Loaded Successfully!");
