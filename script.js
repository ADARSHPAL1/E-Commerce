// Main Application Script
document.addEventListener('DOMContentLoaded', function() {
    // Sample Product Data (would come from API in real app)
    const products = [
        {
            id: 1,
            title: "Wireless Noise-Cancelling Headphones",
            price: 299.99,
            originalPrice: 349.99,
            rating: 4.7,
            reviews: 124,
            category: "electronics",
            images: [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            ],
            description: "Premium wireless headphones with active noise cancellation. Enjoy crystal-clear sound with 30-hour battery life and comfortable over-ear design perfect for travel and daily use.",
            colors: ["Black", "Silver", "Blue"],
            inStock: true,
            isNew: true,
            discount: 15
        },
        // Add 11 more products with similar structure
        {
            id: 2,
            title: "Smart Fitness Watch",
            price: 199.99,
            originalPrice: 249.99,
            rating: 4.5,
            reviews: 89,
            category: "electronics",
            images: [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1551462147-378285fba308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            ],
            description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS tracking, and 7-day battery life. Water-resistant and compatible with iOS and Android.",
            colors: ["Black", "Rose Gold"],
            inStock: true,
            isNew: false,
            discount: 20
        },
        // Additional products...
    ];

    // DOM Elements
    const productsGrid = document.querySelector('.products-grid');
    const quickViewModal = document.querySelector('.quick-view-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalContent = document.querySelector('.modal-content');
    const cartIcon = document.querySelector('.cart-icon');
    const wishlistIcon = document.querySelector('.wishlist-icon');
    const notificationToast = document.querySelector('.notification-toast');
    
    // Initialize
    renderFeaturedProducts();
    setupEventListeners();

    // Render Featured Products
    function renderFeaturedProducts() {
        productsGrid.innerHTML = products.slice(0, 8).map(product => `
            <div class="product-card" data-id="${product.id}" data-category="${product.category}">
                ${product.isNew ? '<span class="product-badge">New</span>' : ''}
                ${product.discount ? `<span class="product-badge">${product.discount}% Off</span>` : ''}
                <img src="${product.images[0]}" alt="${product.title}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-rating">
                        ${generateStarRating(product.rating)}
                        <span>(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                        <button class="wishlist-btn" data-id="${product.id}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
                <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
            </div>
        `).join('');
    }

    // Generate Star Rating
    function generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        return `
            ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
            ${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
            ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
        `;
    }

    // Open Quick View Modal
    function openQuickView(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        modalContent.innerHTML = `
            <div class="modal-product-images">
                <img src="${product.images[0]}" alt="${product.title}" class="modal-main-image">
                <div class="modal-thumbnails">
                    ${product.images.map(img => `
                        <img src="${img}" alt="${product.title} thumbnail" class="modal-thumbnail">
                    `).join('')}
                </div>
            </div>
            <div class="modal-product-info">
                <h2 class="modal-product-title">${product.title}</h2>
                <div class="modal-product-rating">
                    <div class="stars">${generateStarRating(product.rating)}</div>
                    <span class="review-count">${product.reviews} reviews</span>
                </div>
                <div class="modal-product-price">$${product.price.toFixed(2)}</div>
                ${product.originalPrice ? `<div class="original-price">$${product.originalPrice.toFixed(2)}</div>` : ''}
                <p class="modal-product-description">${product.description}</p>
                
                ${product.colors ? `
                <div class="modal-product-options">
                    <h4 class="option-title">Colors</h4>
                    <div class="option-buttons">
                        ${product.colors.map(color => `
                            <button class="option-btn">${color}</button>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div class="modal-product-actions">
                    <button class="modal-add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="modal-wishlist-btn" data-id="${product.id}">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        
        quickViewModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Set up thumbnail click events
        const thumbnails = document.querySelectorAll('.modal-thumbnail');
        const mainImage = document.querySelector('.modal-main-image');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                mainImage.src = thumb.src;
            });
        });
    }

    // Show Notification
    function showNotification(message) {
        const toastMessage = document.querySelector('.toast-message');
        toastMessage.textContent = message;
        
        notificationToast.classList.add('active');
        
        setTimeout(() => {
            notificationToast.classList.remove('active');
        }, 3000);
    }

    // Setup Event Listeners
    function setupEventListeners() {
        // Quick View Buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('quick-view-btn') || 
                e.target.closest('.quick-view-btn')) {
                const btn = e.target.classList.contains('quick-view-btn') ? 
                    e.target : e.target.closest('.quick-view-btn');
                openQuickView(parseInt(btn.dataset.id));
            }
        });
        
        // Close Modal
        closeModalBtn.addEventListener('click', () => {
            quickViewModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        quickViewModal.addEventListener('click', (e) => {
            if (e.target === quickViewModal) {
                quickViewModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Cart Icon
        cartIcon.addEventListener('click', () => {
            document.querySelector('.cart-sidebar').classList.add('active');
        });
        
        // Wishlist Icon
        wishlistIcon.addEventListener('click', () => {
            document.querySelector('.wishlist-sidebar').classList.add('active');
        });
        
        // Add to Cart Buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(e.target.dataset.id);
                addToCart(productId);
            }
        });
    }

    // Add to Cart Functionality
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        // In a real app, this would update the cart state
        showNotification(`${product.title} added to cart!`);
        
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
        
        // Animate cart icon
        cartIcon.classList.add('animate');
        setTimeout(() => {
            cartIcon.classList.remove('animate');
        }, 500);
    }
});

// Cart Animation
const cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', function() {
    this.classList.add('animate');
    setTimeout(() => {
        this.classList.remove('animate');
    }, 500);
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const darkModeCSS = document.getElementById('dark-mode-css');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    if (currentTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeCSS.disabled = false;
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        document.documentElement.setAttribute('data-theme', 'light');
        darkModeCSS.disabled = true;
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Cart Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSubtotal = document.querySelector('.cart-subtotal');
    const cartCount = document.querySelector('.cart-count');
    const closeCart = document.querySelector('.close-cart');
    const cartSidebar = document.querySelector('.cart-sidebar');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Initialize
    updateCartUI();
    
    // Close Cart
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });
    
    // Update Cart UI
    function updateCartUI() {
        // Update cart items
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `).join('');
        
        // Update subtotal
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSubtotal.textContent = subtotal.toFixed(2);
        
        // Update cart count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Event Delegation for Cart Actions
    cartItemsContainer.addEventListener('click', function(e) {
        const target = e.target.closest('.quantity-btn') || e.target.closest('.remove-item');
        if (!target) return;
        
        const productId = parseInt(target.closest('.cart-item').dataset.id);
        const itemIndex = cart.findIndex(item => item.id === productId);
        
        if (target.classList.contains('minus')) {
            // Decrease quantity
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity--;
            } else {
                cart.splice(itemIndex, 1);
            }
        } else if (target.classList.contains('plus')) {
            // Increase quantity
            cart[itemIndex].quantity++;
        } else if (target.classList.contains('remove-item')) {
            // Remove item
            cart.splice(itemIndex, 1);
        }
        
        updateCartUI();
    });
});