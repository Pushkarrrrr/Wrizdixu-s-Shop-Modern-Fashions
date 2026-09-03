/* =====================================================
   WRIZDIXU SHOP
   GitHub Pages Compatible
===================================================== */

"use strict";


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
        id: 1,
        name: "Classic White T-Shirt",
        price: 19.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
        badge: "BESTSELLER",
        description:
            "A clean and versatile white t-shirt designed for everyday comfort and effortless styling."
    },

    {
        id: 2,
        name: "Relaxed Blue Jeans",
        price: 49.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
        badge: "TRENDING",
        description:
            "Relaxed-fit denim jeans with a modern silhouette made for everyday streetwear."
    },

    {
        id: 3,
        name: "Premium Black Sneakers",
        price: 69.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
        badge: "POPULAR",
        description:
            "Minimal black sneakers with a clean silhouette that works with almost every outfit."
    },

    {
        id: 4,
        name: "Minimal Leather Bag",
        price: 54.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description:
            "A modern everyday bag designed with a minimal aesthetic and practical storage."
    },

    {
        id: 5,
        name: "Oversized Streetwear Tee",
        price: 29.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description:
            "Oversized streetwear-inspired t-shirt designed for a relaxed contemporary look."
    },

    {
        id: 6,
        name: "Modern Beige Jacket",
        price: 79.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
        badge: "FEATURED",
        description:
            "A modern neutral jacket that adds a polished touch to casual outfits."
    },

    {
        id: 7,
        name: "Classic Black Cap",
        price: 24.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",
        badge: "HOT",
        description:
            "A timeless black cap designed to complete your everyday casual look."
    },

    {
        id: 8,
        name: "White Casual Sneakers",
        price: 59.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=85",
        badge: "TRENDING",
        description:
            "Clean white sneakers designed for simple, versatile everyday styling."
    },

    {
        id: 9,
        name: "Premium Denim Jacket",
        price: 74.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=900&q=85",
        badge: "FEATURED",
        description:
            "A classic denim jacket with a modern fit and timeless streetwear appeal."
    },

    {
        id: 10,
        name: "Soft Neutral Sweater",
        price: 44.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description:
            "A soft neutral sweater designed for comfortable and effortless everyday outfits."
    },

    {
        id: 11,
        name: "Urban Crossbody Bag",
        price: 39.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
        badge: "POPULAR",
        description:
            "A compact crossbody bag designed for everyday urban use."
    },

    {
        id: 12,
        name: "Classic Brown Boots",
        price: 89.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=85",
        badge: "PREMIUM",
        description:
            "Classic brown boots with a timeless shape for smart casual styling."
    }

];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const sortSelect =
    document.getElementById("sortSelect");

const searchBtn =
    document.getElementById("searchBtn");

const searchPanel =
    document.getElementById("searchPanel");

const searchInput =
    document.getElementById("searchInput");

const closeSearch =
    document.getElementById("closeSearch");

const cartBtn =
    document.getElementById("cartBtn");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const productModal =
    document.getElementById("productModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalPrice =
    document.getElementById("modalPrice");

const modalDescription =
    document.getElementById("modalDescription");

const modalBadge =
    document.getElementById("modalBadge");

const modalAddCart =
    document.getElementById("modalAddCart");

const toast =
    document.getElementById("toast");

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.querySelector(".nav");


/* =====================================================
   STATE
===================================================== */

let selectedCategory = "all";

let selectedProductId = null;

let cart = JSON.parse(
    localStorage.getItem("wrizdixuCart")
) || [];


/* =====================================================
   CURRENCY
===================================================== */

function formatPrice(price) {

    return `$${price.toFixed(2)}`;

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

    let filteredProducts =
        [...products];


    /* CATEGORY FILTER */

    if (selectedCategory !== "all") {

        filteredProducts =
            filteredProducts.filter(product =>
                product.category === selectedCategory
            );

    }


    /* SEARCH FILTER */

    const searchTerm =
        searchInput.value.trim().toLowerCase();

    if (searchTerm) {

        filteredProducts =
            filteredProducts.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchTerm)

            );

    }


    /* SORT */

    const sortValue =
        sortSelect.value;

    if (sortValue === "low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (sortValue === "high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }

    else if (sortValue === "az") {

        filteredProducts.sort(
            (a, b) => a.name.localeCompare(b.name)
        );

    }


    /* EMPTY */

    if (filteredProducts.length === 0) {

        productsGrid.innerHTML = `

            <div class="no-products">

                <h3>
                    No products found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    /* PRODUCTS */

    productsGrid.innerHTML =
        filteredProducts.map(product => `

            <article class="product-card">

                <div
                    class="product-image"
                    onclick="openProduct(${product.id})"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    <span class="product-badge">
                        ${product.badge}
                    </span>

                </div>


                <div class="product-info">

                    <div class="product-category">
                        ${product.category}
                    </div>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>


                    <div class="product-bottom">

                        <div class="product-price">
                            ${formatPrice(product.price)}
                        </div>


                        <div class="product-actions">

                            <button
                                class="product-action-btn"
                                onclick="openProduct(${product.id})"
                                aria-label="View product"
                            >
                                👁
                            </button>

                            <button
                                class="product-action-btn"
                                onclick="addToCart(${product.id})"
                                aria-label="Add to cart"
                            >
                                +
                            </button>

                        </div>

                    </div>

                </div>

            </article>

        `).join("");

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedCategory =
            button.dataset.category;

        renderProducts();

    });

});


/* =====================================================
   SORT
===================================================== */

sortSelect.addEventListener(
    "change",
    renderProducts
);


/* =====================================================
   SEARCH
===================================================== */

searchBtn.addEventListener("click", () => {

    searchPanel.classList.toggle("show");

    if (searchPanel.classList.contains("show")) {

        searchInput.focus();

    }

});


closeSearch.addEventListener("click", () => {

    searchPanel.classList.remove("show");

    searchInput.value = "";

    renderProducts();

});


searchInput.addEventListener(
    "input",
    renderProducts
);


/* =====================================================
   MOBILE MENU
===================================================== */

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});


document.querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("show");

        });

    });


/* =====================================================
   PRODUCT MODAL
===================================================== */

function openProduct(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) return;

    selectedProductId =
        product.id;

    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;

    modalName.textContent =
        product.name;

    modalPrice.textContent =
        formatPrice(product.price);

    modalDescription.textContent =
        product.description;

    modalBadge.textContent =
        product.badge;

    productModal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function closeProductModal() {

    productModal.classList.remove("show");

    document.body.style.overflow =
        "";

}


closeModal.addEventListener(
    "click",
    closeProductModal
);


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target === productModal
        ) {

            closeProductModal();

        }

    }
);


modalAddCart.addEventListener(
    "click",
    () => {

        if (selectedProductId !== null) {

            addToCart(selectedProductId);

            closeProductModal();

        }

    }
);


/* =====================================================
   CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity += 1;

    }

    else {

        cart.push({

            id: product.id,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    showToast(
        `${product.name} added to cart`
    );

}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

    updateCart();

}


function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            item => item.id === productId
        );

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();

    updateCart();

}


function saveCart() {

    localStorage.setItem(
        "wrizdixuCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    let total =
        0;

    let quantity =
        0;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add something you love.
                </p>

            </div>

        `;

    }

    else {

        cartItems.innerHTML =
            cart.map(item => {

                const product =
                    products.find(
                        p => p.id === item.id
                    );

                if (!product) return "";


                const itemTotal =
                    product.price *
                    item.quantity;


                total += itemTotal;

                quantity +=
                    item.quantity;


                return `

                    <div class="cart-item">

                        <div class="cart-item-image">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                            >

                        </div>


                        <div class="cart-item-info">

                            <h4>
                                ${product.name}
                            </h4>

                            <div class="cart-item-price">
                                ${formatPrice(itemTotal)}
                            </div>


                            <div class="quantity-controls">

                                <button
                                    onclick="changeQuantity(${product.id}, -1)"
                                >
                                    −
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    onclick="changeQuantity(${product.id}, 1)"
                                >
                                    +
                                </button>

                            </div>


                            <button
                                class="remove-item"
                                onclick="removeFromCart(${product.id})"
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                `;

            }).join("");

    }


    cartCount.textContent =
        quantity;

    cartTotal.textContent =
        formatPrice(total);

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    cartDrawer.classList.add("show");

    cartOverlay.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


function closeCartDrawer() {

    cartDrawer.classList.remove("show");

    cartOverlay.classList.remove("show");

    document.body.style.overflow =
        "";

}


cartBtn.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartDrawer
);


cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);


/* =====================================================
   CHECKOUT
===================================================== */

checkoutBtn.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            showToast(
                "Your cart is empty"
            );

            return;

        }


        alert(
            "Checkout is currently a demo. Payment integration can be added later."
        );

    }
);


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

}


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProductModal();

            closeCartDrawer();

            searchPanel.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

renderProducts();

updateCart();

console.log(
    "🛍️ Wrizdixu's Shop loaded successfully!"
);