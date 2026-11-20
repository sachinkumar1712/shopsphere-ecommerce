
// ShopSphere JavaScript

// Navbar elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const wishlistBtn = document.getElementById("wishlistBtn");
const shopNowBtn = document.getElementById("shopNowBtn");

// Product elements
const productsGrid = document.getElementById("productsGrid");
const productMessage = document.getElementById("productMessage");
const resultsCount = document.getElementById("resultsCount");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const sortSelect = document.getElementById("sortSelect");

// Category elements
const categoriesGrid = document.getElementById("categoriesGrid");
const selectedCategory = document.getElementById("selectedCategory");

// Product modal elements
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

// Cart elements
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItems = document.getElementById("cartItems");
const cartItemCount = document.getElementById("cartItemCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const continueShoppingBtn = document.getElementById("continueShoppingBtn");
const cartNotification = document.getElementById("cartNotification");

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

// Website state
let searchQuery = "";
let activeCategory = "All";
let sortBy = "default";
let selectedProductId = null;
let previousFocus = null;
let cartPreviousFocus = null;

// Shopping cart
const cart = [];
let notificationTimer = null;

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

// Wishlist
wishlistBtn.addEventListener("click", function () {
    alert("Wishlist feature coming soon!");
});

// Hero button
shopNowBtn.addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("products").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Show notification
function showNotification(message) {
    cartNotification.textContent = message;
    cartNotification.classList.add("show");

    clearTimeout(notificationTimer);

    notificationTimer = setTimeout(function () {
        cartNotification.classList.remove("show");
    }, 3000);
}

// Update cart counter
function updateCartCount() {
    const totalItems = cart.reduce(function (total, item) {
        return total + item.quantity;
    }, 0);

    cartCount.textContent = totalItems;

    cartBtn.setAttribute(
        "aria-label",
        "View shopping cart with " + totalItems + " items"
    );

    cartItemCount.textContent =
        totalItems + (totalItems === 1 ? " item" : " items") + " in your cart";
}

// Calculate subtotal
function calculateSubtotal() {
    return cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
    }, 0);
}

// Add to cart
function addToCart(productId) {
    const product = findProduct(productId);

    if (!product) {
        return;
    }

    const existingItem = cart.find(function (item) {
        return item.id === productId;
    });

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartCount();
    renderCart();
    showNotification(product.name + " added to cart!");
}

// Render cart
function renderCart() {
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <p class="empty-cart">
                Your shopping cart is empty.
            </p>
        `;
    } else {
        cart.forEach(function (item) {
            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="cart-item-image"
                >

                <div class="cart-item-details">
                    <h3>${item.name}</h3>

                    <p class="cart-item-price">
                        ${formatPrice(item.price * item.quantity)}
                    </p>

                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button
                                type="button"
                                class="decrease-quantity"
                                data-id="${item.id}"
                                aria-label="Decrease ${item.name} quantity"
                            >
                                −
                            </button>

                            <span>${item.quantity}</span>

                            <button
                                type="button"
                                class="increase-quantity"
                                data-id="${item.id}"
                                aria-label="Increase ${item.name} quantity"
                            >
                                +
                            </button>
                        </div>

                        <button
                            type="button"
                            class="remove-item"
                            data-id="${item.id}"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            `;

            cartItems.appendChild(cartItem);
        });
    }

    cartSubtotal.textContent = formatPrice(calculateSubtotal());
    checkoutBtn.disabled = cart.length === 0;
}

// Change quantity
function changeQuantity(productId, change) {
    const item = cart.find(function (product) {
        return product.id === productId;
    });

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        const index = cart.indexOf(item);
        cart.splice(index, 1);
    }

    updateCartCount();
    renderCart();
}

// Remove product
function removeFromCart(productId) {
    const index = cart.findIndex(function (item) {
        return item.id === productId;
    });

    if (index === -1) {
        return;
    }

    const removedItem = cart[index];

    cart.splice(index, 1);

    updateCartCount();
    renderCart();

    showNotification(removedItem.name + " removed from cart.");
}

// Open cart sidebar
function openCart() {
    cartPreviousFocus = document.activeElement;

    renderCart();

    cartOverlay.hidden = false;
    cartSidebar.inert = false;
    cartSidebar.classList.add("open");
    cartSidebar.setAttribute("aria-hidden", "false");
    cartBtn.setAttribute("aria-expanded", "true");

    document.body.classList.add("modal-open");
    closeCartBtn.focus();
}

// Close cart sidebar
function closeCart() {
    cartSidebar.classList.remove("open");
    cartSidebar.setAttribute("aria-hidden", "true");
    cartSidebar.inert = true;

    cartOverlay.hidden = true;
    cartBtn.setAttribute("aria-expanded", "false");

    document.body.classList.remove("modal-open");

    if (cartPreviousFocus && cartPreviousFocus.isConnected) {
        cartPreviousFocus.focus();
    }

    cartPreviousFocus = null;
}

// Cart buttons
cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
continueShoppingBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Cart item buttons
cartItems.addEventListener("click", function (event) {
    const increaseBtn = event.target.closest(".increase-quantity");
    const decreaseBtn = event.target.closest(".decrease-quantity");
    const removeBtn = event.target.closest(".remove-item");

    if (increaseBtn) {
        changeQuantity(Number(increaseBtn.dataset.id), 1);
        return;
    }

    if (decreaseBtn) {
        changeQuantity(Number(decreaseBtn.dataset.id), -1);
        return;
    }

    if (removeBtn) {
        removeFromCart(Number(removeBtn.dataset.id));
    }
});

// Checkout placeholder
checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) {
        return;
    }

    showNotification("Checkout feature coming soon!");
});

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

// Product buttons
productsGrid.addEventListener("click", function (event) {
    const detailsButton = event.target.closest(".view-details");

    if (detailsButton) {
        openProductModal(Number(detailsButton.dataset.id));
        return;
    }

    const cartButton = event.target.closest(".add-to-cart");

    if (cartButton) {
        addToCart(Number(cartButton.dataset.id));
    }
});

// Modal buttons
closeModalBtn.addEventListener("click", closeProductModal);

modalAddToCartBtn.addEventListener("click", function () {
    if (selectedProductId === null) {
        return;
    }

    addToCart(selectedProductId);
    closeProductModal();
});

productModal.addEventListener("click", function (event) {
    if (event.target === productModal) {
        closeProductModal();
    }
});

// Keyboard controls
document.addEventListener("keydown", function (event) {
    if (!cartSidebar.classList.contains("open")) {
        if (productModal.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closeProductModal();
            return;
        }

        if (event.key === "Tab") {
            const first = closeModalBtn;
            const last = modalAddToCartBtn;

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }

        return;
    }

    if (event.key === "Escape") {
        closeCart();
        return;
    }

    if (event.key === "Tab") {
        const focusable = Array.from(
            cartSidebar.querySelectorAll(
                "button:not(:disabled)"
            )
        );

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
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

// Load website
displayCategories();
renderProducts();
updateCartCount();
renderCart();

console.log("ShopSphere Loaded Successfully!");
