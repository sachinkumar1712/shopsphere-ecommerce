// DOM ELEMENTS
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const wishlistBtn = document.getElementById("wishlistBtn");
const wishlistCount = document.getElementById("wishlistCount");
const shopNowBtn = document.getElementById("shopNowBtn");

const productsGrid = document.getElementById("productsGrid");
const resultsCount = document.getElementById("resultsCount");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const sortSelect = document.getElementById("sortSelect");

const categoriesGrid = document.getElementById("categoriesGrid");
const selectedCategory = document.getElementById("selectedCategory");

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
const modalWishlistBtn = document.getElementById("modalWishlistBtn");

const sidebarOverlay = document.getElementById("sidebarOverlay");
const cartSidebar = document.getElementById("cartSidebar");
const wishlistSidebar = document.getElementById("wishlistSidebar");

const closeCartBtn = document.getElementById("closeCartBtn");
const cartItems = document.getElementById("cartItems");
const cartItemCount = document.getElementById("cartItemCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const continueShoppingBtn = document.getElementById("continueShoppingBtn");

const closeWishlistBtn = document.getElementById("closeWishlistBtn");
const wishlistItems = document.getElementById("wishlistItems");
const wishlistItemCount = document.getElementById("wishlistItemCount");
const continueWishlistBtn = document.getElementById("continueWishlistBtn");

const cartNotification = document.getElementById("cartNotification");

const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactSubject = document.getElementById("contactSubject");
const contactMessage = document.getElementById("contactMessage");
const contactFormStatus = document.getElementById("contactFormStatus");
const messageCount = document.getElementById("messageCount");

const checkoutSection = document.getElementById("checkout");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutFormStatus = document.getElementById("checkoutFormStatus");
const checkoutOrderItems = document.getElementById("checkoutOrderItems");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutShipping = document.getElementById("checkoutShipping");
const checkoutTotal = document.getElementById("checkoutTotal");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const backToShopBtn = document.getElementById("backToShopBtn");

const orderSuccessSection = document.getElementById("orderSuccess");
const successOrderId = document.getElementById("successOrderId");
const successCustomerName = document.getElementById("successCustomerName");
const successOrderTotal = document.getElementById("successOrderTotal");
const successPaymentMethod = document.getElementById("successPaymentMethod");
const successContinueBtn = document.getElementById("successContinueBtn");
const viewOrdersBtn = document.getElementById("viewOrdersBtn");

// MY ORDERS ELEMENTS
const ordersSection = document.getElementById("orders");
const ordersNavLink = document.getElementById("ordersNavLink");
const ordersShopBtn = document.getElementById("ordersShopBtn");
const totalOrdersStat = document.getElementById("totalOrdersStat");
const totalSpentStat = document.getElementById("totalSpentStat");
const placedOrdersStat = document.getElementById("placedOrdersStat");
const cancelledOrdersStat = document.getElementById("cancelledOrdersStat");
const ordersResultCount = document.getElementById("ordersResultCount");
const orderSearchInput = document.getElementById("orderSearchInput");
const orderStatusFilter = document.getElementById("orderStatusFilter");
const ordersList = document.getElementById("ordersList");

// ORDER DETAILS ELEMENTS
const orderDetailsModal = document.getElementById("orderDetailsModal");
const closeOrderDetailsBtn = document.getElementById("closeOrderDetailsBtn");
const orderDetailsId = document.getElementById("orderDetailsId");
const detailsOrderDate = document.getElementById("detailsOrderDate");
const detailsOrderStatus = document.getElementById("detailsOrderStatus");
const detailsPaymentMethod = document.getElementById("detailsPaymentMethod");
const detailsCustomerName = document.getElementById("detailsCustomerName");
const detailsCustomerEmail = document.getElementById("detailsCustomerEmail");
const detailsCustomerPhone = document.getElementById("detailsCustomerPhone");
const detailsShippingAddress = document.getElementById("detailsShippingAddress");
const orderDetailsItems = document.getElementById("orderDetailsItems");
const detailsSubtotal = document.getElementById("detailsSubtotal");
const detailsShipping = document.getElementById("detailsShipping");
const detailsTotal = document.getElementById("detailsTotal");
const cancelOrderBtn = document.getElementById("cancelOrderBtn");

// CATEGORY DATA
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

// PRODUCT DATA
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

// STORAGE KEYS
const CART_STORAGE_KEY = "shopsphere_cart";
const WISHLIST_STORAGE_KEY = "shopsphere_wishlist";
const ORDERS_STORAGE_KEY = "shopsphere_orders";

// APPLICATION STATE
let searchQuery = "";
let activeCategory = "All";
let sortBy = "default";
let selectedProductId = null;
let selectedOrderId = null;
let activeSidebar = null;
let previousFocus = null;
let notificationTimer = null;

// HELPERS
function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);
}

function formatDate(dateString) {
    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return "Unknown date";
    }

    return date.toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}

function findProduct(productId) {
    return products.find(function (product) {
        return product.id === productId;
    });
}

// ESCAPE SAVED TEXT BEFORE INSERTING INTO HTML
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}

// STORAGE HELPERS
function readStoredArray(key) {
    try {
        const saved = JSON.parse(localStorage.getItem(key) || "[]");

        return Array.isArray(saved) ? saved : [];
    } catch (error) {
        console.error("Unable to load:", key, error);
        return [];
    }
}

function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error("Unable to save:", key, error);
        showNotification("Unable to save data in this browser.");
        return false;
    }
}

// LOAD CART
function loadCart() {
    const saved = readStoredArray(CART_STORAGE_KEY);
    const restored = [];

    saved.forEach(function (item) {
        if (!item || typeof item !== "object") {
            return;
        }

        const product = findProduct(Number(item.id));
        const quantity = Number(item.quantity);

        if (!product || !Number.isSafeInteger(quantity) || quantity < 1) {
            return;
        }

        const existing = restored.find(function (cartItem) {
            return cartItem.id === product.id;
        });

        if (existing) {
            existing.quantity += quantity;
        } else {
            restored.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
    });

    return restored;
}

// LOAD WISHLIST
function loadWishlist() {
    return [...new Set(
        readStoredArray(WISHLIST_STORAGE_KEY)
            .map(function (id) {
                return Number(id);
            })
            .filter(function (id) {
                return Number.isSafeInteger(id) && Boolean(findProduct(id));
            })
    )];
}

// LOAD ORDER HISTORY
function loadOrders() {
    return readStoredArray(ORDERS_STORAGE_KEY).filter(function (order) {
        return (
            order &&
            typeof order === "object" &&
            typeof order.id === "string" &&
            typeof order.createdAt === "string" &&
            Array.isArray(order.items) &&
            order.items.length > 0 &&
            order.shippingAddress &&
            typeof order.shippingAddress === "object" &&
            Number.isFinite(order.total) &&
            order.total >= 0 &&
            ["Placed", "Cancelled"].includes(order.status)
        );
    });
}

// APPLICATION DATA
const cart = loadCart();
const wishlist = loadWishlist();
const orders = loadOrders();

// SAVE FUNCTIONS
function saveCart() {
    return saveToStorage(CART_STORAGE_KEY, cart);
}

function saveWishlist() {
    return saveToStorage(WISHLIST_STORAGE_KEY, wishlist);
}

function saveOrders() {
    return saveToStorage(ORDERS_STORAGE_KEY, orders);
}

// NOTIFICATION
function showNotification(message) {
    cartNotification.textContent = message;
    cartNotification.classList.add("show");

    clearTimeout(notificationTimer);

    notificationTimer = setTimeout(function () {
        cartNotification.classList.remove("show");
    }, 3000);
}

// NAVBAR
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

shopNowBtn.addEventListener("click", function (event) {
    event.preventDefault();
    returnToShopping();
});

// CART COUNT
function updateCartCount() {
    const total = cart.reduce(function (sum, item) {
        return sum + item.quantity;
    }, 0);

    cartCount.textContent = total;

    cartBtn.setAttribute(
        "aria-label",
        "View shopping cart with " + total + " items"
    );

    cartItemCount.textContent =
        total + (total === 1 ? " item" : " items") + " in your cart";
}

// WISHLIST COUNT
function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;

    wishlistBtn.setAttribute(
        "aria-label",
        "View wishlist with " + wishlist.length + " saved products"
    );

    wishlistItemCount.textContent =
        wishlist.length +
        (wishlist.length === 1 ? " saved product" : " saved products");
}

// CART CALCULATIONS
function calculateSubtotal() {
    return cart.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);
}

function calculateShipping(subtotal) {
    if (subtotal === 0 || subtotal >= 999) {
        return 0;
    }

    return 49;
}

// ADD TO CART
function addToCart(productId) {
    const product = findProduct(productId);

    if (!product) {
        return;
    }

    const existing = cart.find(function (item) {
        return item.id === productId;
    });

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    renderCart();
    renderCheckoutSummary();

    showNotification(product.name + " added to cart!");
}

// CHANGE QUANTITY
function changeQuantity(productId, change) {
    const item = cart.find(function (product) {
        return product.id === productId;
    });

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart.splice(cart.indexOf(item), 1);
    }

    saveCart();
    updateCartCount();
    renderCart();
    renderCheckoutSummary();
}

// REMOVE CART ITEM
function removeFromCart(productId) {
    const index = cart.findIndex(function (item) {
        return item.id === productId;
    });

    if (index === -1) {
        return;
    }

    const name = cart[index].name;

    cart.splice(index, 1);

    saveCart();
    updateCartCount();
    renderCart();
    renderCheckoutSummary();

    showNotification(name + " removed from cart.");
}

// RENDER CART
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
            const element = document.createElement("div");

            element.className = "cart-item";

            element.innerHTML = `
                <img loading="lazy" decoding="async"
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

            cartItems.appendChild(element);
        });
    }

    cartSubtotal.textContent = formatPrice(calculateSubtotal());
    checkoutBtn.disabled = cart.length === 0;
}

// WISHLIST
function toggleWishlist(productId) {
    const product = findProduct(productId);

    if (!product) {
        return;
    }

    const index = wishlist.indexOf(productId);

    if (index === -1) {
        wishlist.push(productId);
        showNotification(product.name + " added to wishlist!");
    } else {
        wishlist.splice(index, 1);
        showNotification(product.name + " removed from wishlist.");
    }

    saveWishlist();
    updateWishlistCount();
    renderWishlist();
    updateWishlistButtons();
}

// RENDER WISHLIST
function renderWishlist() {
    wishlistItems.innerHTML = "";

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <p class="empty-cart">
                Your wishlist is empty.
            </p>
        `;

        return;
    }

    wishlist.forEach(function (productId) {
        const product = findProduct(productId);

        if (!product) {
            return;
        }

        const element = document.createElement("div");

        element.className = "wishlist-item";

        element.innerHTML = `
            <img loading="lazy" decoding="async"
                src="${product.image}"
                alt="${product.name}"
                class="wishlist-item-image"
            >

            <div class="wishlist-item-details">
                <h3>${product.name}</h3>

                <p class="wishlist-item-price">
                    ${formatPrice(product.price)}
                </p>

                <div class="wishlist-item-actions">
                    <button
                        type="button"
                        class="wishlist-cart-btn"
                        data-id="${product.id}"
                    >
                        Add to Cart
                    </button>

                    <button
                        type="button"
                        class="remove-wishlist-item"
                        data-id="${product.id}"
                    >
                        Remove
                    </button>
                </div>
            </div>
        `;

        wishlistItems.appendChild(element);
    });
}

// UPDATE WISHLIST BUTTONS
function updateWishlistButtons() {
    document.querySelectorAll(".wishlist-heart").forEach(function (button) {
        const id = Number(button.dataset.id);
        const saved = wishlist.includes(id);

        button.classList.toggle("active", saved);
        button.textContent = saved ? "♥" : "♡";
        button.setAttribute("aria-pressed", String(saved));

        button.setAttribute(
            "aria-label",
            saved ? "Remove from wishlist" : "Add to wishlist"
        );
    });

    if (selectedProductId !== null) {
        const saved = wishlist.includes(selectedProductId);

        modalWishlistBtn.textContent = saved
            ? "♥ Remove from Wishlist"
            : "♡ Add to Wishlist";

        modalWishlistBtn.setAttribute("aria-pressed", String(saved));
    }
}

// SIDEBAR
function openSidebar(type) {
    previousFocus = document.activeElement;
    activeSidebar = type;

    const sidebar = type === "cart" ? cartSidebar : wishlistSidebar;

    if (type === "cart") {
        renderCart();
    } else {
        renderWishlist();
    }

    sidebarOverlay.hidden = false;
    sidebar.inert = false;
    sidebar.classList.add("open");
    sidebar.setAttribute("aria-hidden", "false");

    cartBtn.setAttribute("aria-expanded", String(type === "cart"));
    wishlistBtn.setAttribute("aria-expanded", String(type === "wishlist"));

    document.body.classList.add("modal-open");

    sidebar.querySelector(".cart-close").focus();
}

function closeSidebar() {
    if (!activeSidebar) {
        return;
    }

    const sidebar = activeSidebar === "cart"
        ? cartSidebar
        : wishlistSidebar;

    sidebar.classList.remove("open");
    sidebar.setAttribute("aria-hidden", "true");
    sidebar.inert = true;

    sidebarOverlay.hidden = true;

    cartBtn.setAttribute("aria-expanded", "false");
    wishlistBtn.setAttribute("aria-expanded", "false");

    document.body.classList.remove("modal-open");

    activeSidebar = null;

    if (previousFocus && previousFocus.isConnected) {
        previousFocus.focus();
    }

    previousFocus = null;
}

// SIDEBAR EVENTS
cartBtn.addEventListener("click", function () {
    openSidebar("cart");
});

wishlistBtn.addEventListener("click", function () {
    openSidebar("wishlist");
});

closeCartBtn.addEventListener("click", closeSidebar);
closeWishlistBtn.addEventListener("click", closeSidebar);
continueShoppingBtn.addEventListener("click", closeSidebar);
continueWishlistBtn.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

cartItems.addEventListener("click", function (event) {
    const increase = event.target.closest(".increase-quantity");
    const decrease = event.target.closest(".decrease-quantity");
    const remove = event.target.closest(".remove-item");

    if (increase) {
        changeQuantity(Number(increase.dataset.id), 1);
    } else if (decrease) {
        changeQuantity(Number(decrease.dataset.id), -1);
    } else if (remove) {
        removeFromCart(Number(remove.dataset.id));
    }
});

wishlistItems.addEventListener("click", function (event) {
    const addButton = event.target.closest(".wishlist-cart-btn");
    const removeButton = event.target.closest(".remove-wishlist-item");

    if (addButton) {
        addToCart(Number(addButton.dataset.id));
    } else if (removeButton) {
        toggleWishlist(Number(removeButton.dataset.id));
    }
});

// DISPLAY CATEGORIES
function displayCategories() {
    categoriesGrid.innerHTML = "";

    categories.forEach(function (category) {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "category-card";

        if (activeCategory === category.name) {
            card.classList.add("active");
        }

        card.setAttribute(
            "aria-pressed",
            String(activeCategory === category.name)
        );

        card.innerHTML = `
            <img loading="lazy" decoding="async"
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
            selectedCategory.textContent = "You selected: " + category.name;

            displayCategories();
            renderProducts();
            returnToShopping();
        });

        categoriesGrid.appendChild(card);
    });
}

// FILTER AND SORT
function getFilteredProducts() {
    const filtered = products.filter(function (product) {
        const categoryMatch =
            activeCategory === "All" ||
            product.category === activeCategory;

        const searchText = (
            product.name + " " + product.category
        ).toLowerCase();

        return categoryMatch && searchText.includes(searchQuery);
    });

    const sorted = [...filtered];

    if (sortBy === "low") {
        sorted.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (sortBy === "high") {
        sorted.sort(function (a, b) {
            return b.price - a.price;
        });
    } else if (sortBy === "rating") {
        sorted.sort(function (a, b) {
            return b.rating - a.rating;
        });
    } else if (sortBy === "name") {
        sorted.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    }

    return sorted;
}

// RENDER PRODUCTS
function renderProducts() {
    const filtered = getFilteredProducts();

    productsGrid.innerHTML = "";

    resultsCount.textContent =
        "Showing " + filtered.length +
        " of " + products.length + " products";

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <p class="no-products">
                No products found. Try another search.
            </p>
        `;

        return;
    }

    filtered.forEach(function (product) {
        const saved = wishlist.includes(product.id);
        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <img loading="lazy" decoding="async"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="product-badge">${product.badge}</span>

                <button
                    type="button"
                    class="wishlist-heart ${saved ? "active" : ""}"
                    data-id="${product.id}"
                    aria-label="${saved ? "Remove from wishlist" : "Add to wishlist"}"
                    aria-pressed="${saved}"
                >
                    ${saved ? "♥" : "♡"}
                </button>
            </div>

            <div class="product-details">
                <p class="product-category">${product.category}</p>

                <h3 class="product-name">${product.name}</h3>

                <div class="product-rating">
                    ★ ${product.rating} <span>/ 5</span>
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
                    <button type="button" class="compare-product-btn"
                        data-id="${product.id}" aria-pressed="${comparisonIds.includes(product.id)}">
                        ${comparisonIds.includes(product.id) ? "✓ Selected for Comparison" : "Compare Product"}
                    </button>
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

// PRODUCT MODAL
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

    updateWishlistButtons();

    productModal.hidden = false;
    document.body.classList.add("modal-open");

    closeModalBtn.focus();
}

function closeProductModal() {
    productModal.hidden = true;
    document.body.classList.remove("modal-open");

    selectedProductId = null;

    if (previousFocus && previousFocus.isConnected) {
        previousFocus.focus();
    }

    previousFocus = null;
}

// PRODUCT EVENTS
productsGrid.addEventListener("click", function (event) {
    const wishlistButton = event.target.closest(".wishlist-heart");
    const detailsButton = event.target.closest(".view-details");
    const addButton = event.target.closest(".add-to-cart");

    if (wishlistButton) {
        toggleWishlist(Number(wishlistButton.dataset.id));
    } else if (detailsButton) {
        openProductModal(Number(detailsButton.dataset.id));
    } else if (addButton) {
        addToCart(Number(addButton.dataset.id));
    }
});

closeModalBtn.addEventListener("click", closeProductModal);

modalAddToCartBtn.addEventListener("click", function () {
    if (selectedProductId !== null) {
        addToCart(selectedProductId);
        closeProductModal();
    }
});

modalWishlistBtn.addEventListener("click", function () {
    if (selectedProductId !== null) {
        toggleWishlist(selectedProductId);
    }
});

productModal.addEventListener("click", function (event) {
    if (event.target === productModal) {
        closeProductModal();
    }
});

// FOCUS TRAP
function trapFocus(event, container) {
    const focusable = Array.from(
        container.querySelectorAll(
            "button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled)"
        )
    ).filter(function (element) {
        return element.getClientRects().length > 0;
    });

    if (focusable.length === 0) {
        return;
    }

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

// KEYBOARD EVENTS
document.addEventListener("keydown", function (event) {
    if (activeSidebar) {
        const sidebar = activeSidebar === "cart"
            ? cartSidebar
            : wishlistSidebar;

        if (event.key === "Escape") {
            closeSidebar();
            return;
        }

        if (event.key === "Tab") {
            trapFocus(event, sidebar);
        }

        return;
    }

    if (!orderDetailsModal.hidden) {
        if (event.key === "Escape") {
            closeOrderDetailsModal();
            return;
        }

        if (event.key === "Tab") {
            trapFocus(event, orderDetailsModal);
        }

        return;
    }

    if (!productModal.hidden) {
        if (event.key === "Escape") {
            closeProductModal();
            return;
        }

        if (event.key === "Tab") {
            trapFocus(event, productModal);
        }
    }
});

// PRODUCT SEARCH
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    searchQuery = searchInput.value.trim().toLowerCase();

    renderProducts();
    returnToShopping();
});

// PRODUCT SORT
sortSelect.addEventListener("change", function () {
    sortBy = sortSelect.value;
    renderProducts();
});

// RESET FILTERS
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

// FORM VALIDATION HELPERS
function showFieldError(input, errorId, message) {
    const errorElement = document.getElementById(errorId);

    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    input.setAttribute("aria-invalid", "true");

    errorElement.textContent = message;

    return false;
}

function showFieldSuccess(input, errorId) {
    const errorElement = document.getElementById(errorId);

    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    input.setAttribute("aria-invalid", "false");

    errorElement.textContent = "";

    return true;
}

function clearFormStyles(form) {
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
        field.classList.remove("is-valid", "is-invalid");
        field.removeAttribute("aria-invalid");
    });

    form.querySelectorAll(".form-error").forEach(function (element) {
        element.textContent = "";
    });
}

function setFormStatus(element, message, type) {
    element.textContent = message;
    element.classList.remove("success", "error");

    if (type) {
        element.classList.add(type);
    }
}

// CONTACT VALIDATION
function validateContactName() {
    const value = contactName.value.trim();

    if (value.length < 2) {
        return showFieldError(
            contactName,
            "nameError",
            "Please enter at least 2 characters."
        );
    }

    return showFieldSuccess(contactName, "nameError");
}

function validateContactEmail() {
    const value = contactEmail.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(value)) {
        return showFieldError(
            contactEmail,
            "emailError",
            "Please enter a valid email address."
        );
    }

    return showFieldSuccess(contactEmail, "emailError");
}

function validateContactSubject() {
    if (!contactSubject.value) {
        return showFieldError(
            contactSubject,
            "subjectError",
            "Please select a subject."
        );
    }

    return showFieldSuccess(contactSubject, "subjectError");
}

function validateContactMessage() {
    if (contactMessage.value.trim().length < 10) {
        return showFieldError(
            contactMessage,
            "messageError",
            "Message must contain at least 10 characters."
        );
    }

    return showFieldSuccess(contactMessage, "messageError");
}

// CONTACT CHARACTER COUNT
function updateMessageCount() {
    const length = contactMessage.value.length;

    messageCount.textContent = length + " / 1000 characters";
    messageCount.classList.toggle("near-limit", length >= 900 && length < 1000);
    messageCount.classList.toggle("at-limit", length >= 1000);
}

// CONTACT EVENTS
contactName.addEventListener("blur", validateContactName);
contactEmail.addEventListener("blur", validateContactEmail);
contactSubject.addEventListener("change", validateContactSubject);
contactMessage.addEventListener("blur", validateContactMessage);

contactMessage.addEventListener("input", updateMessageCount);

[contactName, contactEmail, contactSubject, contactMessage].forEach(function (field) {
    field.addEventListener("input", function () {
        setFormStatus(contactFormStatus, "", "");
    });
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const checks = [
        validateContactName(),
        validateContactEmail(),
        validateContactSubject(),
        validateContactMessage()
    ];

    if (checks.includes(false)) {
        setFormStatus(
            contactFormStatus,
            "Please correct the highlighted fields.",
            "error"
        );

        const firstInvalid = contactForm.querySelector(".is-invalid");

        if (firstInvalid) {
            firstInvalid.focus();
        }

        return;
    }

    contactForm.reset();
    clearFormStyles(contactForm);
    updateMessageCount();

    setFormStatus(
        contactFormStatus,
        "Your message passed validation. It has not been sent.",
        "success"
    );
});

// CHECKOUT SUMMARY
function renderCheckoutSummary() {
    checkoutOrderItems.innerHTML = "";

    if (cart.length === 0) {
        checkoutOrderItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty. Add products to continue.
            </p>
        `;
    } else {
        cart.forEach(function (item) {
            const element = document.createElement("div");

            element.className = "checkout-order-item";

            element.innerHTML = `
                <img loading="lazy" decoding="async" src="${item.image}" alt="${item.name}">

                <div class="checkout-order-item-details">
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                </div>

                <strong class="checkout-order-item-price">
                    ${formatPrice(item.price * item.quantity)}
                </strong>
            `;

            checkoutOrderItems.appendChild(element);
        });
    }

    const subtotal = calculateSubtotal();
    const shipping = calculateShipping(subtotal);
    const total = subtotal + shipping - updateCoupon(subtotal);

    checkoutSubtotal.textContent = formatPrice(subtotal);
    checkoutShipping.textContent = shipping === 0
        ? "FREE"
        : formatPrice(shipping);

    checkoutTotal.textContent = formatPrice(total);

    placeOrderBtn.disabled = cart.length === 0;
}

// CHECKOUT NAVIGATION
function openCheckout() {
    if (cart.length === 0) {
        showNotification("Please add products before checkout.");
        return;
    }

    closeSidebar();

    checkoutSection.hidden = false;
    orderSuccessSection.hidden = true;
    ordersSection.hidden = true;

    renderCheckoutSummary();

    checkoutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function returnToShopping() {
    checkoutSection.hidden = true;
    orderSuccessSection.hidden = true;
    ordersSection.hidden = true;

    document.getElementById("products").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

checkoutBtn.addEventListener("click", openCheckout);
backToShopBtn.addEventListener("click", returnToShopping);
successContinueBtn.addEventListener("click", returnToShopping);

// CHECKOUT VALIDATION CONFIGURATION
const checkoutFields = [
    {
        id: "checkoutName",
        errorId: "checkoutNameError",
        validate: function (value) {
            return value.length >= 2
                ? ""
                : "Please enter your full name.";
        }
    },
    {
        id: "checkoutEmail",
        errorId: "checkoutEmailError",
        validate: function (value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? ""
                : "Please enter a valid email address.";
        }
    },
    {
        id: "checkoutPhone",
        errorId: "checkoutPhoneError",
        validate: function (value) {
            return /^[6-9]\d{9}$/.test(value)
                ? ""
                : "Enter a valid 10-digit Indian mobile number.";
        }
    },
    {
        id: "checkoutPincode",
        errorId: "checkoutPincodeError",
        validate: function (value) {
            return /^[1-9]\d{5}$/.test(value)
                ? ""
                : "Enter a valid 6-digit Indian PIN code.";
        }
    },
    {
        id: "checkoutAddress",
        errorId: "checkoutAddressError",
        validate: function (value) {
            return value.length >= 10
                ? ""
                : "Address must contain at least 10 characters.";
        }
    },
    {
        id: "checkoutCity",
        errorId: "checkoutCityError",
        validate: function (value) {
            return value.length >= 2
                ? ""
                : "Please enter your city.";
        }
    },
    {
        id: "checkoutState",
        errorId: "checkoutStateError",
        validate: function (value) {
            return value.length >= 2
                ? ""
                : "Please enter your state.";
        }
    }
];

// VALIDATE CHECKOUT FIELD
function validateCheckoutField(fieldConfig) {
    const input = document.getElementById(fieldConfig.id);
    const value = input.value.trim();
    const error = fieldConfig.validate(value);

    if (error) {
        return showFieldError(input, fieldConfig.errorId, error);
    }

    return showFieldSuccess(input, fieldConfig.errorId);
}

// LIVE CHECKOUT VALIDATION
checkoutFields.forEach(function (fieldConfig) {
    const input = document.getElementById(fieldConfig.id);

    input.addEventListener("blur", function () {
        validateCheckoutField(fieldConfig);
    });

    input.addEventListener("input", function () {
        setFormStatus(checkoutFormStatus, "", "");

        if (input.classList.contains("is-invalid")) {
            validateCheckoutField(fieldConfig);
        }
    });
});

// GENERATE DEMO ORDER ID
function generateOrderId() {
    const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();

    return "SS-DEMO-" + Date.now() + "-" + randomPart;
}

// CREATE ORDER SNAPSHOT
function createOrderRecord(paymentMethod) {
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping(subtotal);

    return {
        id: generateOrderId(),
        createdAt: new Date().toISOString(),
        status: "Placed",

        items: cart.map(function (item) {
            return {
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                quantity: item.quantity
            };
        }),

        customer: {
            name: document.getElementById("checkoutName").value.trim(),
            email: document.getElementById("checkoutEmail").value.trim(),
            phone: document.getElementById("checkoutPhone").value.trim()
        },

        shippingAddress: {
            address: document.getElementById("checkoutAddress").value.trim(),
            city: document.getElementById("checkoutCity").value.trim(),
            state: document.getElementById("checkoutState").value.trim(),
            pincode: document.getElementById("checkoutPincode").value.trim()
        },

        paymentMethod: paymentMethod,
        subtotal: subtotal,
        shipping: shipping,
        coupon: activeCoupon,
        discount: calculateDiscount(subtotal),
        total: subtotal + shipping - calculateDiscount(subtotal)
    };
}

// CHECKOUT SUBMISSION
checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (cart.length === 0) {
        setFormStatus(
            checkoutFormStatus,
            "Your cart is empty. Add products before placing an order.",
            "error"
        );

        return;
    }

    const results = checkoutFields.map(function (fieldConfig) {
        return validateCheckoutField(fieldConfig);
    });

    if (results.includes(false)) {
        setFormStatus(
            checkoutFormStatus,
            "Please correct the highlighted shipping details.",
            "error"
        );

        const firstInvalid = checkoutForm.querySelector(".is-invalid");

        if (firstInvalid) {
            firstInvalid.focus();
        }

        return;
    }

    const selectedPayment = checkoutForm.querySelector(
        'input[name="paymentMethod"]:checked'
    );

    if (!selectedPayment) {
        setFormStatus(
            checkoutFormStatus,
            "Please select a payment method.",
            "error"
        );

        return;
    }

    const order = createOrderRecord(selectedPayment.value);

    // Save the complete order before clearing the cart.
    orders.unshift(order);

    if (!saveOrders()) {
        orders.shift();

        setFormStatus(
            checkoutFormStatus,
            "Unable to save this demo order. Please check browser storage.",
            "error"
        );

        return;
    }

    const paymentLabels = {
        COD: "Cash on Delivery (Demo)",
        UPI: "UPI (Demo)",
        CARD: "Card (Demo)"
    };

    successOrderId.textContent = order.id;
    successCustomerName.textContent = order.customer.name;
    successOrderTotal.textContent = formatPrice(order.total);
    successPaymentMethod.textContent = paymentLabels[order.paymentMethod];

    // Clear the cart only after saving the order.
    cart.length = 0;
    activeCoupon = "";
    saveToStorage(couponKey, []);
    couponStatus.textContent = "";

    saveCart();
    updateCartCount();
    renderCart();
    renderCheckoutSummary();

    checkoutForm.reset();
    clearFormStyles(checkoutForm);
    setFormStatus(checkoutFormStatus, "", "");

    renderOrders();

    checkoutSection.hidden = true;
    ordersSection.hidden = true;
    orderSuccessSection.hidden = false;

    orderSuccessSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    showNotification("Demo order saved successfully!");
});

// MY ORDERS NAVIGATION
function showOrdersSection() {
    checkoutSection.hidden = true;
    orderSuccessSection.hidden = true;
    ordersSection.hidden = false;

    renderOrders();

    ordersSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

ordersNavLink.addEventListener("click", function (event) {
    event.preventDefault();
    showOrdersSection();
});

viewOrdersBtn.addEventListener("click", showOrdersSection);
ordersShopBtn.addEventListener("click", returnToShopping);

// ORDER STATISTICS
function updateOrderStatistics() {
    const placedOrders = orders.filter(function (order) {
        return order.status === "Placed";
    });

    const cancelledOrders = orders.filter(function (order) {
        return order.status === "Cancelled";
    });

    const activeValue = placedOrders.reduce(function (sum, order) {
        return sum + order.total;
    }, 0);

    totalOrdersStat.textContent = orders.length;
    placedOrdersStat.textContent = placedOrders.length;
    cancelledOrdersStat.textContent = cancelledOrders.length;
    totalSpentStat.textContent = formatPrice(activeValue);
}

// FILTER ORDERS
function getFilteredOrders() {
    const query = orderSearchInput.value.trim().toLowerCase();
    const status = orderStatusFilter.value;

    return orders.filter(function (order) {
        const productNames = order.items
            .map(function (item) {
                return String(item.name);
            })
            .join(" ")
            .toLowerCase();

        const matchesSearch =
            order.id.toLowerCase().includes(query) ||
            productNames.includes(query);

        const matchesStatus =
            status === "All" || order.status === status;

        return matchesSearch && matchesStatus;
    });
}

// RENDER ORDER CARDS
function renderOrders() {
    updateOrderStatistics();

    const filtered = getFilteredOrders();

    ordersResultCount.textContent =
        filtered.length +
        (filtered.length === 1 ? " order found" : " orders found");

    ordersList.innerHTML = "";

    if (filtered.length === 0) {
        const hasOrders = orders.length > 0;

        ordersList.innerHTML = `
            <div class="empty-orders">
                <div class="empty-orders-icon">📦</div>

                <h3>
                    ${hasOrders ? "No matching orders" : "No orders yet"}
                </h3>

                <p>
                    ${hasOrders
                        ? "Try changing your search or status filter."
                        : "Your demo orders will appear here after checkout."
                    }
                </p>

                <button type="button" class="empty-orders-shop">
                    ${hasOrders ? "Browse Products" : "Start Shopping"}
                </button>
            </div>
        `;

        return;
    }

    filtered.forEach(function (order) {
        const card = document.createElement("article");
        const visibleItems = order.items.slice(0, 3);
        const remaining = order.items.length - visibleItems.length;

        card.className = "order-card";

        const thumbnails = visibleItems.map(function (item) {
            const product = findProduct(Number(item.id));
            const image = product ? product.image : "";

            return `
                <img loading="lazy" decoding="async"
                    src="${image}"
                    alt="${escapeHTML(item.name)}"
                    class="order-product-thumbnail"
                    loading="lazy"
                >
            `;
        }).join("");

        card.innerHTML = `
            <div class="order-card-header">

                <div>
                    <h4>${escapeHTML(order.id)}</h4>
                    <p>${formatDate(order.createdAt)}</p>
                </div>

                <span class="order-status ${order.status.toLowerCase()}">
                    ${order.status}
                </span>

            </div>

            <div class="order-card-products">
                ${thumbnails}

                ${remaining > 0
                    ? `<div class="order-more-products">+${remaining}</div>`
                    : ""
                }
            </div>

            <div class="order-card-footer">

                <div class="order-card-total">
                    <p>
                        ${order.items.reduce(function (sum, item) {
                            return sum + item.quantity;
                        }, 0)} items · ${escapeHTML(order.paymentMethod)}
                    </p>

                    <strong>${formatPrice(order.total)}</strong>
                </div>

                <button
                    type="button"
                    class="view-order-btn"
                    data-order-id="${escapeHTML(order.id)}"
                >
                    View Details
                </button>

            </div>
        `;

        ordersList.appendChild(card);
    });
}

// ORDER FILTER EVENTS
orderSearchInput.addEventListener("input", renderOrders);
orderStatusFilter.addEventListener("change", renderOrders);

// ORDER LIST EVENTS
ordersList.addEventListener("click", function (event) {
    const detailsButton = event.target.closest(".view-order-btn");
    const shopButton = event.target.closest(".empty-orders-shop");

    if (detailsButton) {
        openOrderDetails(detailsButton.dataset.orderId);
    } else if (shopButton) {
        returnToShopping();
    }
});

// FIND ORDER
function findOrder(orderId) {
    return orders.find(function (order) {
        return order.id === orderId;
    });
}

// OPEN ORDER DETAILS
function openOrderDetails(orderId) {
    const order = findOrder(orderId);

    if (!order) {
        showNotification("Order not found.");
        return;
    }

    selectedOrderId = order.id;
    previousFocus = document.activeElement;

    orderDetailsId.textContent = order.id;
    detailsOrderDate.textContent = formatDate(order.createdAt);
    detailsOrderStatus.textContent = order.status;
    detailsPaymentMethod.textContent = order.paymentMethod;

    detailsCustomerName.textContent = order.customer?.name || "";
    detailsCustomerEmail.textContent = order.customer?.email || "";
    detailsCustomerPhone.textContent = order.customer?.phone || "";

    const address = order.shippingAddress;

    detailsShippingAddress.textContent = [
        address.address,
        address.city,
        address.state,
        address.pincode
    ].filter(Boolean).join(", ");

    orderDetailsItems.innerHTML = "";

    order.items.forEach(function (item) {
        const product = findProduct(Number(item.id));
        const image = product ? product.image : "";

        const element = document.createElement("div");

        element.className = "order-detail-item";

        element.innerHTML = `
            <img loading="lazy" decoding="async"
                src="${image}"
                alt="${escapeHTML(item.name)}"
            >

            <div class="order-detail-item-info">
                <h4>${escapeHTML(item.name)}</h4>
                <p>
                    ${formatPrice(item.price)} × ${item.quantity}
                </p>
            </div>

            <strong class="order-detail-item-price">
                ${formatPrice(item.price * item.quantity)}
            </strong>
        `;

        orderDetailsItems.appendChild(element);
    });

    detailsSubtotal.textContent = formatPrice(order.subtotal);
    detailsShipping.textContent = order.shipping === 0
        ? "FREE"
        : formatPrice(order.shipping);

    document.getElementById("detailsDiscount").textContent = "−" + formatPrice(order.discount || 0);
    detailsTotal.textContent = formatPrice(order.total);

    cancelOrderBtn.disabled = order.status === "Cancelled";
    cancelOrderBtn.textContent = order.status === "Cancelled"
        ? "Order Already Cancelled"
        : "Cancel Demo Order";

    orderDetailsModal.hidden = false;
    document.body.classList.add("modal-open");

    closeOrderDetailsBtn.focus();
}

// CLOSE ORDER DETAILS
function closeOrderDetailsModal() {
    orderDetailsModal.hidden = true;
    document.body.classList.remove("modal-open");

    selectedOrderId = null;

    if (previousFocus && previousFocus.isConnected) {
        previousFocus.focus();
    }

    previousFocus = null;
}

// CANCEL DEMO ORDER
function cancelDemoOrder(orderId) {
    const order = findOrder(orderId);

    if (!order || order.status === "Cancelled") {
        return;
    }

    const confirmed = window.confirm(
        "Are you sure you want to cancel this demo order?"
    );

    if (!confirmed) {
        return;
    }

    order.status = "Cancelled";
    order.cancelledAt = new Date().toISOString();

    if (!saveOrders()) {
        order.status = "Placed";
        delete order.cancelledAt;
        return;
    }

    closeOrderDetailsModal();
    renderOrders();

    showNotification("Demo order cancelled successfully.");
}

// ORDER DETAILS EVENTS
closeOrderDetailsBtn.addEventListener("click", closeOrderDetailsModal);

orderDetailsModal.addEventListener("click", function (event) {
    if (event.target === orderDetailsModal) {
        closeOrderDetailsModal();
    }
});

cancelOrderBtn.addEventListener("click", function () {
    if (selectedOrderId) {
        cancelDemoOrder(selectedOrderId);
    }
});

//  PRODUCT REVIEWS AND RATINGS

// REVIEW DOM ELEMENTS
const reviewForm = document.getElementById("reviewForm");
const reviewName = document.getElementById("reviewName");
const reviewTitle = document.getElementById("reviewTitle");
const reviewMessage = document.getElementById("reviewMessage");

const starInput = document.getElementById("starInput");
const ratingText = document.getElementById("ratingText");
const ratingError = document.getElementById("ratingError");

const averageRating = document.getElementById("averageRating");
const averageStars = document.getElementById("averageStars");
const totalReviews = document.getElementById("totalReviews");
const ratingDistribution = document.getElementById("ratingDistribution");

const reviewCharacterCount = document.getElementById(
    "reviewCharacterCount"
);

const reviewFormStatus = document.getElementById(
    "reviewFormStatus"
);

const reviewRatingFilter = document.getElementById(
    "reviewRatingFilter"
);

const reviewSort = document.getElementById("reviewSort");
const reviewsList = document.getElementById("reviewsList");

const reviewResultsCount = document.getElementById(
    "reviewResultsCount"
);

// REVIEW STORAGE KEY
const REVIEWS_STORAGE_KEY = "shopsphere_reviews";

// REVIEW STATE
let selectedRating = 0;

// RATING LABELS
const ratingLabels = {
    0: "Select a rating",
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent"
};

// LOAD SAVED REVIEWS
function loadReviews() {
    return readStoredArray(REVIEWS_STORAGE_KEY).filter(
        function (review) {
            return (
                review &&
                typeof review === "object" &&
                typeof review.id === "string" &&
                Boolean(findProduct(review.productId)) &&
                Number.isInteger(review.rating) &&
                review.rating >= 1 &&
                review.rating <= 5 &&
                typeof review.name === "string" &&
                typeof review.title === "string" &&
                typeof review.message === "string" &&
                typeof review.createdAt === "string" &&
                !Number.isNaN(
                    new Date(review.createdAt).getTime()
                )
            );
        }
    );
}

// REVIEW APPLICATION DATA
const reviews = loadReviews();

// SAVE REVIEWS
function saveReviews() {
    return saveToStorage(REVIEWS_STORAGE_KEY, reviews);
}

// GET PRODUCT REVIEWS
function getProductReviews(productId) {
    return reviews.filter(function (review) {
        return review.productId === productId;
    });
}

// CALCULATE AVERAGE RATING
function getAverageRating(productId) {
    const productReviews = getProductReviews(productId);

    if (productReviews.length === 0) {
        return 0;
    }

    const totalRating = productReviews.reduce(
        function (sum, review) {
            return sum + review.rating;
        },
        0
    );

    return totalRating / productReviews.length;
}

// GET PRODUCT DISPLAY RATING
function getDisplayRating(product) {
    const productReviews = getProductReviews(product.id);

    if (productReviews.length === 0) {
        return product.rating;
    }

    return getAverageRating(product.id);
}

// GENERATE REVIEW STARS
function generateReviewStars(rating) {
    const roundedRating = Math.max(
        0,
        Math.min(5, Math.round(rating))
    );

    return (
        "★".repeat(roundedRating) +
        "☆".repeat(5 - roundedRating)
    );
}

// UPDATE INTERACTIVE STAR INPUT
function updateStarInput(previewRating = selectedRating) {
    const starButtons = starInput.querySelectorAll(
        "button[data-rating]"
    );

    starButtons.forEach(function (button) {
        const rating = Number(button.dataset.rating);

        const isActive = rating <= previewRating;

        button.classList.toggle("active", isActive);

        button.textContent = isActive ? "★" : "☆";

        button.setAttribute(
            "aria-pressed",
            String(rating === selectedRating)
        );
    });

    ratingText.textContent = ratingLabels[previewRating];
}

// STAR CLICK EVENT
starInput.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-rating]");

    if (!button) {
        return;
    }

    selectedRating = Number(button.dataset.rating);

    updateStarInput();

    ratingError.textContent = "";
});

// STAR HOVER EVENT
starInput.addEventListener("mouseover", function (event) {
    const button = event.target.closest("button[data-rating]");

    if (!button) {
        return;
    }

    const previewRating = Number(button.dataset.rating);

    updateStarInput(previewRating);
});

// RESTORE SELECTED RATING
starInput.addEventListener("mouseleave", function () {
    updateStarInput();
});

// REVIEW CHARACTER COUNTER
function updateReviewCharacterCount() {
    reviewCharacterCount.textContent =
        reviewMessage.value.length;
}

// CHARACTER COUNTER EVENT
reviewMessage.addEventListener(
    "input",
    updateReviewCharacterCount
);

// CLEAR REVIEW FIELD ERROR
function clearReviewFieldError(input, errorId) {
    input.removeAttribute("aria-invalid");

    document.getElementById(errorId).textContent = "";
}

// SHOW REVIEW FIELD ERROR
function showReviewFieldError(input, errorId, message) {
    input.setAttribute("aria-invalid", "true");

    document.getElementById(errorId).textContent = message;
}

// REVIEW FORM STATUS
function setReviewStatus(message, type) {
    reviewFormStatus.textContent = message;

    reviewFormStatus.style.color =
        type === "error" ? "#dc2626" : "#15803d";
}

// RESET REVIEW FORM
function resetReviewForm() {
    reviewForm.reset();

    selectedRating = 0;

    updateStarInput();

    updateReviewCharacterCount();

    ratingError.textContent = "";

    clearReviewFieldError(
        reviewName,
        "reviewNameError"
    );

    clearReviewFieldError(
        reviewTitle,
        "reviewTitleError"
    );

    clearReviewFieldError(
        reviewMessage,
        "reviewMessageError"
    );

    reviewFormStatus.textContent = "";
}

// VALIDATE REVIEW FORM
function validateReviewForm() {
    let isValid = true;

    const name = reviewName.value.trim();
    const title = reviewTitle.value.trim();
    const message = reviewMessage.value.trim();

    ratingError.textContent = "";

    clearReviewFieldError(
        reviewName,
        "reviewNameError"
    );

    clearReviewFieldError(
        reviewTitle,
        "reviewTitleError"
    );

    clearReviewFieldError(
        reviewMessage,
        "reviewMessageError"
    );

    // Validate Rating
    if (
        !Number.isInteger(selectedRating) ||
        selectedRating < 1 ||
        selectedRating > 5
    ) {
        ratingError.textContent =
            "Please select a rating.";

        isValid = false;
    }

    // Validate Name
    if (name.length < 2 || name.length > 50) {
        showReviewFieldError(
            reviewName,
            "reviewNameError",
            "Enter a name between 2 and 50 characters."
        );

        isValid = false;
    }

    // Validate Title
    if (title.length < 3 || title.length > 100) {
        showReviewFieldError(
            reviewTitle,
            "reviewTitleError",
            "Enter a title between 3 and 100 characters."
        );

        isValid = false;
    }

    // Validate Message
    if (message.length < 10 || message.length > 500) {
        showReviewFieldError(
            reviewMessage,
            "reviewMessageError",
            "Enter a review between 10 and 500 characters."
        );

        isValid = false;
    }

    return isValid;
}

// CALCULATE RATING DISTRIBUTION
function calculateRatingDistribution(productId) {
    const productReviews = getProductReviews(productId);

    const distribution = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    };

    productReviews.forEach(function (review) {
        distribution[review.rating] += 1;
    });

    return distribution;
}

// RENDER RATING SUMMARY
function renderRatingSummary(productId) {
    const product = findProduct(productId);

    if (!product) {
        return;
    }

    const productReviews = getProductReviews(productId);

    const total = productReviews.length;

    const average = getAverageRating(productId);

    const distribution = calculateRatingDistribution(
        productId
    );

    averageRating.textContent =
        total === 0 ? "—" : average.toFixed(1);

    averageStars.textContent = generateReviewStars(average);

    totalReviews.textContent =
        total + (total === 1 ? " review" : " reviews");

    ratingDistribution.innerHTML = "";

    // Display Rating Bars
    for (let rating = 5; rating >= 1; rating--) {
        const count = distribution[rating];

        const percentage =
            total === 0
                ? 0
                : Math.round((count / total) * 100);

        const row = document.createElement("div");

        row.className = "rating-bar-row";

        row.innerHTML = `
            <span class="rating-bar-label">
                ${rating} ★
            </span>

            <div
                class="rating-bar-track"
                role="progressbar"
                aria-label="${rating} star reviews"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="${percentage}"
            >
                <div
                    class="rating-bar-fill"
                    style="width: ${percentage}%"
                ></div>
            </div>

            <span class="rating-bar-count">
                ${count} (${percentage}%)
            </span>
        `;

        ratingDistribution.appendChild(row);
    }

    // Update Product Modal Rating
    if (total === 0) {
        modalProductRating.textContent =
            "★ " + product.rating + " / 5 (Demo rating)";
    } else {
        modalProductRating.textContent =
            "★ " +
            average.toFixed(1) +
            " / 5 (" +
            total +
            (total === 1 ? " review)" : " reviews)");
    }
}

// FILTER AND SORT REVIEWS
function getFilteredReviews(productId) {
    let filteredReviews = getProductReviews(productId);

    const selectedFilter = reviewRatingFilter.value;

    const selectedSort = reviewSort.value;

    // Filter by Rating
    if (selectedFilter !== "all") {
        filteredReviews = filteredReviews.filter(
            function (review) {
                return review.rating === Number(selectedFilter);
            }
        );
    }

    // Sort Reviews
    if (selectedSort === "newest") {
        filteredReviews.sort(function (a, b) {
            return new Date(b.createdAt) -
                new Date(a.createdAt);
        });
    }

    else if (selectedSort === "oldest") {
        filteredReviews.sort(function (a, b) {
            return new Date(a.createdAt) -
                new Date(b.createdAt);
        });
    }

    else if (selectedSort === "highest") {
        filteredReviews.sort(function (a, b) {
            return b.rating - a.rating;
        });
    }

    else if (selectedSort === "lowest") {
        filteredReviews.sort(function (a, b) {
            return a.rating - b.rating;
        });
    }

    return filteredReviews;
}

// RENDER REVIEWS LIST
function renderReviewsList(productId) {
    const filteredReviews = getFilteredReviews(productId);

    const allProductReviews = getProductReviews(productId);

    reviewsList.innerHTML = "";

    reviewResultsCount.textContent =
        filteredReviews.length +
        (filteredReviews.length === 1
            ? " review found"
            : " reviews found");

    // Empty Reviews
    if (filteredReviews.length === 0) {
        const emptyMessage =
            allProductReviews.length === 0
                ? "Be the first to review this product."
                : "No reviews match the selected rating.";

        reviewsList.innerHTML = `
            <div class="empty-reviews">
                <h4>No Reviews Found</h4>
                <p>${emptyMessage}</p>
            </div>
        `;

        return;
    }

    // Create Review Cards
    filteredReviews.forEach(function (review) {
        const reviewCard = document.createElement("article");

        reviewCard.className = "review-card";

        const initial = review.name
            .charAt(0)
            .toUpperCase();

        reviewCard.innerHTML = `
            <div class="review-card-header">

                <div class="reviewer-info">

                    <div class="reviewer-avatar">
                        ${escapeHTML(initial)}
                    </div>

                    <div>

                        <h4 class="reviewer-name">
                            ${escapeHTML(review.name)}
                        </h4>

                        <p class="review-date">
                            ${escapeHTML(
                                formatDate(review.createdAt)
                            )}
                        </p>

                    </div>

                </div>

                <div
                    class="review-card-stars"
                    aria-label="${review.rating} out of 5 stars"
                >
                    ${generateReviewStars(review.rating)}
                </div>

            </div>

            <h4 class="review-title">
                ${escapeHTML(review.title)}
            </h4>

            <p class="review-message">${escapeHTML(review.message)}</p>

            <div class="review-footer">

                <span class="local-review-label">
                    Local Demo Review
                </span>

                <button
                    type="button"
                    class="delete-review-btn"
                    data-review-id="${escapeHTML(review.id)}"
                >
                    Delete Review
                </button>

            </div>
        `;

        reviewsList.appendChild(reviewCard);
    });
}

// RENDER COMPLETE PRODUCT REVIEWS
function renderProductReviews(productId) {
    if (!findProduct(productId)) {
        return;
    }

    renderRatingSummary(productId);

    renderReviewsList(productId);
}

// GENERATE UNIQUE REVIEW ID
function generateReviewId() {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ) {
        return "REVIEW-" + crypto.randomUUID();
    }

    return (
        "REVIEW-" +
        Date.now() +
        "-" +
        Math.random().toString(36).slice(2, 10)
    );
}

// CREATE AND SUBMIT REVIEW
reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!findProduct(selectedProductId)) {
        setReviewStatus(
            "Please select a product first.",
            "error"
        );

        return;
    }

    if (!validateReviewForm()) {
        setReviewStatus(
            "Please correct the errors above.",
            "error"
        );

        return;
    }

    const newReview = {
        id: generateReviewId(),
        productId: selectedProductId,
        name: reviewName.value.trim(),
        title: reviewTitle.value.trim(),
        message: reviewMessage.value.trim(),
        rating: selectedRating,
        createdAt: new Date().toISOString()
    };

    // Add Review
    reviews.unshift(newReview);

    // Save to LocalStorage
    if (!saveReviews()) {
        reviews.shift();

        setReviewStatus(
            "Unable to save your review.",
            "error"
        );

        return;
    }

    // Reset Review Form
    resetReviewForm();

    // Reset Filters
    reviewRatingFilter.value = "all";
    reviewSort.value = "newest";

    // Update Reviews
    renderProductReviews(selectedProductId);

    // Update Product Cards
    renderProducts();

    // Success Message
    setReviewStatus(
        "Your review was submitted successfully!",
        "success"
    );

    showNotification("Review submitted successfully!");
});

// REVIEW RATING FILTER EVENT
reviewRatingFilter.addEventListener("change", function () {
    if (selectedProductId !== null) {
        renderReviewsList(selectedProductId);
    }
});

// REVIEW SORT EVENT
reviewSort.addEventListener("change", function () {
    if (selectedProductId !== null) {
        renderReviewsList(selectedProductId);
    }
});

// DELETE REVIEW
function deleteReview(reviewId) {
    const index = reviews.findIndex(function (review) {
        return (
            review.id === reviewId &&
            review.productId === selectedProductId
        );
    });

    if (index === -1) {
        return;
    }

    const confirmed = window.confirm(
        "Are you sure you want to delete this review?"
    );

    if (!confirmed) {
        return;
    }

    const deletedReview = reviews[index];

    // Remove Review
    reviews.splice(index, 1);

    // Update LocalStorage
    if (!saveReviews()) {
        reviews.splice(index, 0, deletedReview);

        setReviewStatus(
            "Unable to delete this review.",
            "error"
        );

        return;
    }

    // Update Interface
    renderProductReviews(selectedProductId);

    renderProducts();

    setReviewStatus(
        "Review deleted successfully.",
        "success"
    );

    showNotification("Review deleted successfully!");
}

// DELETE REVIEW EVENT DELEGATION
reviewsList.addEventListener("click", function (event) {
    const button = event.target.closest(
        ".delete-review-btn"
    );

    if (!button) {
        return;
    }

    deleteReview(button.dataset.reviewId);
});

// CLEAR VALIDATION WHILE TYPING
reviewName.addEventListener("input", function () {
    clearReviewFieldError(
        reviewName,
        "reviewNameError"
    );
});

reviewTitle.addEventListener("input", function () {
    clearReviewFieldError(
        reviewTitle,
        "reviewTitleError"
    );
});

reviewMessage.addEventListener("input", function () {
    clearReviewFieldError(
        reviewMessage,
        "reviewMessageError"
    );
});
// COUPON SYSTEM
const coupons = {
    WELCOME10: { minimum: 500, percent: 10 },
    SHOP20: { minimum: 2000, percent: 20 },
    SAVE100: { minimum: 999, amount: 100 }
};
const couponInput = document.getElementById("couponInput");
const couponStatus = document.getElementById("couponStatus");
const removeCouponBtn = document.getElementById("removeCouponBtn");
const couponKey = "shopsphere_coupon";
let activeCoupon = readStoredArray(couponKey)[0] || "";

function calculateDiscount(subtotal) {
    const coupon = Object.hasOwn(coupons, activeCoupon) ? coupons[activeCoupon] : null;
    if (!coupon || subtotal < coupon.minimum) return 0;
    return Math.min(subtotal, coupon.amount || Math.floor(subtotal * coupon.percent / 100));
}

function updateCoupon(subtotal) {
    const discount = calculateDiscount(subtotal);
    if (activeCoupon && !discount) {
        activeCoupon = "";
        saveToStorage(couponKey, []);
        couponStatus.textContent = "Coupon removed: minimum order not met.";
    }
    couponInput.value = activeCoupon;
    removeCouponBtn.hidden = !activeCoupon;
    document.getElementById("checkoutDiscount").textContent = "−" + formatPrice(discount);
    return discount;
}

document.getElementById("applyCouponBtn").addEventListener("click", function () {
    const code = couponInput.value.trim().toUpperCase();
    if (!Object.hasOwn(coupons, code)) {
        couponStatus.textContent = "Invalid coupon code.";
        return;
    }
    if (calculateSubtotal() < coupons[code].minimum) {
        couponStatus.textContent = "Minimum order: " + formatPrice(coupons[code].minimum);
        return;
    }
    activeCoupon = code;
    saveToStorage(couponKey, [code]);
    renderCheckoutSummary();
    couponStatus.textContent = code + " applied successfully!";
});

removeCouponBtn.addEventListener("click", function () {
    activeCoupon = "";
    saveToStorage(couponKey, []);
    renderCheckoutSummary();
    couponStatus.textContent = "Coupon removed.";
});

// PRODUCT COMPARISON
const comparisonKey = "shopsphere_comparison";
const comparisonIds = [...new Set(readStoredArray(comparisonKey)
    .map(Number).filter(id => Boolean(findProduct(id))))].slice(0, 3);
const comparisonDialog = document.getElementById("comparisonDialog");
const comparisonContent = document.getElementById("comparisonContent");
const comparisonCount = document.getElementById("comparisonCount");
const openComparisonBtn = document.getElementById("openComparisonBtn");
const clearComparisonBtn = document.getElementById("clearComparisonBtn");

function updateComparison() {
    comparisonCount.textContent = comparisonIds.length + " of 3 products selected";
    openComparisonBtn.disabled = comparisonIds.length < 2;
    clearComparisonBtn.disabled = comparisonIds.length === 0;
    productsGrid.querySelectorAll(".compare-product-btn").forEach(function (button) {
        const selected = comparisonIds.includes(Number(button.dataset.id));
        button.setAttribute("aria-pressed", String(selected));
        button.textContent = selected ? "✓ Selected for Comparison" : "Compare Product";
    });
    if (comparisonDialog.open) renderComparison();
}

function toggleComparison(id) {
    if (!findProduct(id)) return;
    const index = comparisonIds.indexOf(id);
    if (index !== -1) {
        comparisonIds.splice(index, 1);
    } else if (comparisonIds.length < 3) {
        comparisonIds.push(id);
    } else {
        showNotification("You can compare up to three products.");
        return;
    }
    saveToStorage(comparisonKey, comparisonIds);
    updateComparison();
}

function renderComparison() {
    const selected = comparisonIds.map(findProduct);
    if (!selected.length) {
        comparisonContent.textContent = "No products selected.";
        return;
    }
    const lowestPrice = Math.min(...selected.map(product => product.price));
    const highestRating = Math.max(...selected.map(getDisplayRating));
    comparisonContent.innerHTML = `<table class="comparison-table">
        <caption>Selected products</caption>
        <thead><tr><th scope="col">Feature</th>${selected.map(product => `
            <th scope="col"><img loading="lazy" decoding="async" src="${product.image}" alt="${escapeHTML(product.name)}">
            ${escapeHTML(product.name)}</th>`).join("")}</tr></thead>
        <tbody>
            <tr><th scope="row">Category</th>${selected.map(product => `<td>${escapeHTML(product.category)}</td>`).join("")}</tr>
            <tr><th scope="row">Price</th>${selected.map(product => `<td>${formatPrice(product.price)}${selected.length > 1 && product.price === lowestPrice ? '<strong class="comparison-best">Lowest price</strong>' : ''}</td>`).join("")}</tr>
            <tr><th scope="row">Rating</th>${selected.map(product => `<td>★ ${getDisplayRating(product).toFixed(1)} / 5${selected.length > 1 && getDisplayRating(product) === highestRating ? '<strong class="comparison-best">Highest rating</strong>' : ''}</td>`).join("")}</tr>
            <tr><th scope="row">Description</th>${selected.map(product => `<td>${escapeHTML(product.description)}</td>`).join("")}</tr>
            <tr><th scope="row">Actions</th>${selected.map(product => `<td><button type="button" data-compare-cart="${product.id}">Add to Cart</button><button type="button" data-compare-remove="${product.id}">Remove</button></td>`).join("")}</tr>
        </tbody></table>`;
}

productsGrid.addEventListener("click", function (event) {
    const button = event.target.closest(".compare-product-btn");
    if (button) toggleComparison(Number(button.dataset.id));
});

openComparisonBtn.addEventListener("click", function () {
    if (comparisonIds.length < 2) return;
    renderComparison();
    comparisonDialog.showModal();
});

document.getElementById("closeComparisonBtn").addEventListener("click", function () {
    comparisonDialog.close();
});

clearComparisonBtn.addEventListener("click", function () {
    comparisonIds.length = 0;
    saveToStorage(comparisonKey, comparisonIds);
    updateComparison();
});

comparisonContent.addEventListener("click", function (event) {
    const cartButton = event.target.closest("[data-compare-cart]");
    const removeButton = event.target.closest("[data-compare-remove]");
    if (cartButton) {
        addToCart(Number(cartButton.dataset.compareCart));
        cartButton.textContent = "✓ Added to Cart";
    } else if (removeButton) {
        toggleComparison(Number(removeButton.dataset.compareRemove));
        document.getElementById("closeComparisonBtn").focus();
    }
});

// INITIALIZE SHOPSPHERE
displayCategories();
renderProducts();

updateCartCount();
renderCart();

updateWishlistCount();
renderWishlist();

renderCheckoutSummary();
renderOrders();
updateMessageCount();

updateComparison();

// STEP 19: THEME AND NAVIGATION
const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");
const themeKey = "shopsphere_theme";

function applyTheme(theme) {
    const dark = theme === "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    themeToggle.textContent = dark ? "☀" : "☾";
    themeToggle.setAttribute("aria-pressed", String(dark));
}

let savedTheme = null;
try {
    savedTheme = localStorage.getItem(themeKey);
} catch (error) {
    console.warn("Theme preference unavailable.");
}
applyTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme :
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

themeToggle.addEventListener("click", function () {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
        localStorage.setItem(themeKey, theme);
    } catch (error) {
        showNotification("Theme changed, but preference could not be saved.");
    }
});

function updateBackToTop() {
    backToTop.hidden = window.scrollY < 500;
}
window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();
backToTop.addEventListener("click", function () {
    document.getElementById("home").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
});

console.log("ShopSphere Step 19 Loaded Successfully!");
