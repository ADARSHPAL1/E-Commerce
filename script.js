        document.addEventListener('DOMContentLoaded', function() {
            // Dark Mode Toggle
            const themeToggle = document.getElementById('theme-toggle');
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
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            }
            
            function disableDarkMode() {
                document.documentElement.setAttribute('data-theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
    
            // Mobile Menu Toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mainNav = document.querySelector('.main-nav');
            
            mobileMenuBtn.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                this.innerHTML = mainNav.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
    
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.main-nav a').forEach(link => {
                link.addEventListener('click', () => {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
    
            // Sample Product Data with web images
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
                        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    ],
                    description: "Premium wireless headphones with active noise cancellation. Enjoy crystal-clear sound with 30-hour battery life and comfortable over-ear design perfect for travel and daily use.",
                    colors: ["Black", "Silver", "Blue"],
                    inStock: true,
                    isNew: true,
                    discount: 15
                },
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
                {
                    id: 3,
                    title: "Leather Wallet",
                    price: 49.99,
                    rating: 4.2,
                    reviews: 56,
                    category: "fashion",
                    images: [
                        "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    ],
                    description: "Genuine leather wallet with multiple card slots and RFID protection. Sleek design that fits comfortably in your pocket while holding all your essentials.",
                    colors: ["Brown", "Black"],
                    inStock: true,
                    isNew: true,
                    discount: 0
                },
                {
                    id: 4,
                    title: "Bluetooth Speaker",
                    price: 129.99,
                    originalPrice: 159.99,
                    rating: 4.3,
                    reviews: 72,
                    category: "electronics",
                    images: [
                        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    ],
                    description: "Portable Bluetooth speaker with 20-hour battery life and waterproof design. Perfect for outdoor adventures, parties, or just enjoying music at home.",
                    colors: ["Black", "Blue", "Red"],
                    inStock: true,
                    isNew: false,
                    discount: 20
                },
                {
                    id: 5,
                    title: "Cotton T-Shirt",
                    price: 29.99,
                    rating: 4.1,
                    reviews: 43,
                    category: "fashion",
                    images: [
                        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    ],
                    description: "Premium cotton t-shirt available in multiple colors and sizes. Soft, breathable fabric with a comfortable fit that lasts wash after wash.",
                    colors: ["White", "Black", "Gray"],
                    inStock: true,
                    isNew: true,
                    discount: 0
                },
                {
                    id: 6,
                    title: "Ceramic Coffee Mug",
                    price: 24.99,
                    rating: 4.0,
                    reviews: 38,
                    category: "home",
                    images: [
                        "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1594304467390-fb1c1eef9a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    ],
                    description: "Elegant ceramic mug perfect for your morning coffee or tea. Comfortable handle and generous 14oz capacity. Microwave and dishwasher safe.",
                    colors: ["White", "Black"],
                    inStock: true,
                    isNew: false,
                    discount: 10
                },
                {
                    id: 7,
                    title: "Wireless Keyboard",
                    price: 59.99,
                    originalPrice: 79.99,
                    rating: 4.4,
                    reviews: 67,
                    category: "electronics",
                    images: [
                        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    ],
                    description: "Sleek wireless keyboard with ergonomic design for comfortable typing. Compatible with multiple devices and operating systems. Long battery life with auto-sleep mode.",
                    colors: ["Black", "White"],
                    inStock: true,
                    isNew: false,
                    discount: 25
                },
                {
                    id: 8,
                    title: "Denim Jeans",
                    price: 59.99,
                    rating: 4.2,
                    reviews: 52,
                    category: "fashion",
                    images: [
                        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    ],
                    description: "Classic denim jeans with modern fit and stretch technology. Durable fabric that maintains its shape while providing all-day comfort. Multiple washes available.",
                    colors: ["Blue", "Black"],
                    inStock: true,
                    isNew: true,
                    discount: 0
                }
            ];
    
            // DOM Elements
            const productsGrid = document.querySelector('.products-grid');
            const quickViewModal = document.querySelector('.quick-view-modal');
            const closeModalBtn = document.querySelector('.close-modal');
            const modalContent = document.querySelector('.modal-content');
            const cartIcon = document.querySelector('.cart-icon');
            const wishlistIcon = document.querySelector('.wishlist-icon');
            const notificationToast = document.querySelector('.notification-toast');
            const cartSidebar = document.querySelector('.cart-sidebar');
            const closeCart = document.querySelector('.close-cart');
            const cartItemsContainer = document.querySelector('.cart-items');
            const cartSubtotal = document.querySelector('.cart-subtotal');
            const cartCount = document.querySelector('.cart-count');
            const wishlistCount = document.querySelector('.wishlist-count');
            
            // Initialize
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            
            renderFeaturedProducts();
            updateCartUI();
            updateWishlistUI();
            setupEventListeners();
    
            // Render Featured Products
            function renderFeaturedProducts() {
                productsGrid.innerHTML = products.slice(0, 8).map(product => `
                    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
                        ${product.isNew ? '<span class="product-badge">New</span>' : ''}
                        ${product.discount ? `<span class="product-badge discount-badge">${product.discount}% Off</span>` : ''}
                        <div class="product-image-container">
                            <img src="${product.images[0]}" alt="${product.title}" class="product-image" loading="lazy">
                        </div>
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
                                    <i class="${wishlist.some(item => item.id === product.id) ? 'fas' : 'far'} fa-heart"></i>
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
                            ${product.images.map((img, index) => `
                                <img src="${img}" alt="${product.title} thumbnail" class="modal-thumbnail ${index === 0 ? 'active' : ''}">
                            `).join('')}
                        </div>
                    </div>
                    <div class="modal-product-info">
                        <h2 class="modal-product-title">${product.title}</h2>
                        <div class="modal-product-rating">
                            <div class="stars">${generateStarRating(product.rating)}</div>
                            <span class="review-count">${product.reviews} reviews</span>
                        </div>
                        <div class="modal-product-price">
                            $${product.price.toFixed(2)}
                            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                        <p class="modal-product-description">${product.description}</p>
                        
                        ${product.colors ? `
                        <div class="modal-product-options">
                            <h4 class="option-title">Colors</h4>
                            <div class="option-buttons">
                                ${product.colors.map((color, index) => `
                                    <button class="option-btn ${index === 0 ? 'active' : ''}">${color}</button>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                        
                        <div class="modal-product-actions">
                            <button class="modal-add-to-cart" data-id="${product.id}">Add to Cart</button>
                            <button class="modal-wishlist-btn" data-id="${product.id}">
                                <i class="${wishlist.some(item => item.id === product.id) ? 'fas' : 'far'} fa-heart"></i>
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
                        // Update main image
                        mainImage.src = thumb.src;
                        
                        // Update active thumbnail
                        thumbnails.forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
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
    
            // Add to Cart
            function addToCart(productId) {
                const product = products.find(p => p.id === productId);
                if (!product) return;
                
                const existingItem = cart.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({
                        ...product,
                        quantity: 1,
                        image: product.images[0]
                    });
                }
                
                updateCartUI();
                showNotification(`${product.title} added to cart!`);
                
                // Animate cart icon
                cartIcon.classList.add('animate');
                setTimeout(() => {
                    cartIcon.classList.remove('animate');
                }, 500);
            }
    
            // Update Cart UI
            function updateCartUI() {
                // Update cart items
                if (cart.length === 0) {
                    cartItemsContainer.innerHTML = `
                        <div class="empty-cart">
                            <i class="fas fa-shopping-bag"></i>
                            <p>Your cart is empty</p>
                        </div>
                    `;
                } else {
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
                }
                
                // Update subtotal
                const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                cartSubtotal.textContent = subtotal.toFixed(2);
                
                // Update cart count
                const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
                cartCount.textContent = totalItems;
                
                // Save to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
            }
    
            // Toggle Wishlist
            function toggleWishlist(productId) {
                const product = products.find(p => p.id === productId);
                if (!product) return;
                
                const itemIndex = wishlist.findIndex(item => item.id === productId);
                
                if (itemIndex === -1) {
                    wishlist.push({
                        ...product,
                        image: product.images[0]
                    });
                    showNotification(`${product.title} added to wishlist!`);
                } else {
                    wishlist.splice(itemIndex, 1);
                    showNotification(`${product.title} removed from wishlist!`);
                }
                
                updateWishlistUI();
                renderFeaturedProducts();
                
                // Update any open modal
                const modalWishlistBtn = document.querySelector('.modal-wishlist-btn');
                if (modalWishlistBtn && parseInt(modalWishlistBtn.dataset.id) === productId) {
                    const icon = modalWishlistBtn.querySelector('i');
                    icon.className = itemIndex === -1 ? 'fas fa-heart' : 'far fa-heart';
                }
            }
    
            // Update Wishlist UI
            function updateWishlistUI() {
                // Update wishlist count
                wishlistCount.textContent = wishlist.length;
                
                // Save to localStorage
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                
                // Update wishlist sidebar if open
                if (document.querySelector('.wishlist-sidebar.active')) {
                    renderWishlistItems();
                }
            }
    
            // Render Wishlist Items
            function renderWishlistItems() {
                const wishlistItemsContainer = document.querySelector('.wishlist-items');
                
                if (wishlist.length === 0) {
                    wishlistItemsContainer.innerHTML = `
                        <div class="empty-wishlist">
                            <i class="far fa-heart"></i>
                            <p>Your wishlist is empty</p>
                        </div>
                    `;
                    return;
                }
                
                wishlistItemsContainer.innerHTML = wishlist.map(item => `
                    <div class="wishlist-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.title}" class="wishlist-item-img">
                        <div class="wishlist-item-details">
                            <h4 class="wishlist-item-title">${item.title}</h4>
                            <p class="wishlist-item-price">$${item.price.toFixed(2)}</p>
                            <button class="add-to-cart-from-wishlist" data-id="${item.id}">Add to Cart</button>
                            <button class="remove-wishlist-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                `).join('');
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
                
                // Close Cart
                closeCart.addEventListener('click', () => {
                    cartSidebar.classList.remove('active');
                });
                
                // Wishlist Icon
                wishlistIcon.addEventListener('click', () => {
                    document.querySelector('.wishlist-sidebar').classList.add('active');
                    renderWishlistItems();
                });
                
                // Close Wishlist
                document.querySelector('.close-wishlist').addEventListener('click', () => {
                    document.querySelector('.wishlist-sidebar').classList.remove('active');
                });

                                // Add to Cart Buttons
                                document.addEventListener('click', function(e) {
                    if (e.target.classList.contains('add-to-cart-btn') || 
                        e.target.closest('.add-to-cart-btn')) {
                        const btn = e.target.classList.contains('add-to-cart-btn') ? 
                            e.target : e.target.closest('.add-to-cart-btn');
                        addToCart(parseInt(btn.dataset.id));
                    }
                    
                    // Modal Add to Cart
                    if (e.target.classList.contains('modal-add-to-cart') || 
                        e.target.closest('.modal-add-to-cart')) {
                        const btn = e.target.classList.contains('modal-add-to-cart') ? 
                            e.target : e.target.closest('.modal-add-to-cart');
                        addToCart(parseInt(btn.dataset.id));
                        quickViewModal.classList.remove('active');
                    }
                    
                    // Add to Cart from Wishlist
                    if (e.target.classList.contains('add-to-cart-from-wishlist') || 
                        e.target.closest('.add-to-cart-from-wishlist')) {
                        const btn = e.target.classList.contains('add-to-cart-from-wishlist') ? 
                            e.target : e.target.closest('.add-to-cart-from-wishlist');
                        addToCart(parseInt(btn.dataset.id));
                    }
                });
                
                // Wishlist Buttons
                document.addEventListener('click', function(e) {
                    if (e.target.classList.contains('wishlist-btn') || 
                        e.target.closest('.wishlist-btn')) {
                        const btn = e.target.classList.contains('wishlist-btn') ? 
                            e.target : e.target.closest('.wishlist-btn');
                        toggleWishlist(parseInt(btn.dataset.id));
                    }
                    
                    // Modal Wishlist Button
                    if (e.target.classList.contains('modal-wishlist-btn') || 
                        e.target.closest('.modal-wishlist-btn')) {
                        const btn = e.target.classList.contains('modal-wishlist-btn') ? 
                            e.target : e.target.closest('.modal-wishlist-btn');
                        toggleWishlist(parseInt(btn.dataset.id));
                    }
                    
                    // Remove from Wishlist
                    if (e.target.classList.contains('remove-wishlist-item') || 
                        e.target.closest('.remove-wishlist-item')) {
                        const btn = e.target.classList.contains('remove-wishlist-item') ? 
                            e.target : e.target.closest('.remove-wishlist-item');
                        const productId = parseInt(btn.dataset.id);
                        const itemIndex = wishlist.findIndex(item => item.id === productId);
                        
                        if (itemIndex !== -1) {
                            wishlist.splice(itemIndex, 1);
                            updateWishlistUI();
                            showNotification('Item removed from wishlist');
                        }
                    }
                });
                
                // Cart Quantity Adjustments
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
                    showNotification('Cart updated');
                });
                
                // Checkout Button
                document.querySelector('.checkout-btn').addEventListener('click', function() {
                    if (cart.length === 0) {
                        showNotification('Your cart is empty');
                        return;
                    }
                    showNotification('Proceeding to checkout');
                    // In a real app, this would redirect to checkout page
                    cartSidebar.classList.remove('active');
                });
                
                // View Cart Button from Wishlist
                document.querySelector('.view-cart-btn').addEventListener('click', function() {
                    document.querySelector('.wishlist-sidebar').classList.remove('active');
                    document.querySelector('.cart-sidebar').classList.add('active');
                });
                
                // Search Functionality
                document.querySelector('.search-bar input').addEventListener('input', function(e) {
                    const query = e.target.value.toLowerCase();
                    if (query.length < 2) {
                        renderFeaturedProducts();
                        return;
                    }
                    
                    const filtered = products.filter(product => 
                        product.title.toLowerCase().includes(query) ||
                        product.category.toLowerCase().includes(query)
                    );
                    
                    renderSearchResults(filtered);
                });
                
                // Newsletter Form
                document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = this.querySelector('input').value;
                    showNotification(`Thanks for subscribing with ${email}!`);
                    this.reset();
                });
                
                // Option Buttons in Modal (color/size selection)
                document.addEventListener('click', function(e) {
                    if (e.target.classList.contains('option-btn')) {
                        const optionButtons = e.target.parentElement.querySelectorAll('.option-btn');
                        optionButtons.forEach(btn => btn.classList.remove('active'));
                        e.target.classList.add('active');
                    }
                });
            }
            
            // Render Search Results
            function renderSearchResults(results) {
                if (results.length === 0) {
                    productsGrid.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-search"></i>
                            <p>No products found matching your search</p>
                        </div>
                    `;
                    return;
                }
                
                productsGrid.innerHTML = results.map(product => `
                    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
                        ${product.isNew ? '<span class="product-badge">New</span>' : ''}
                        ${product.discount ? `<span class="product-badge discount-badge">${product.discount}% Off</span>` : ''}
                        <div class="product-image-container">
                            <img src="${product.images[0]}" alt="${product.title}" class="product-image" loading="lazy">
                        </div>
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
                                    <i class="${wishlist.some(item => item.id === product.id) ? 'fas' : 'far'} fa-heart"></i>
                                </button>
                            </div>
                        </div>
                        <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
                    </div>
                `).join('');
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

        // Wishlist Animation
        const wishlistIcon = document.querySelector('.wishlist-icon');
        wishlistIcon.addEventListener('click', function() {
            this.classList.add('animate');
            setTimeout(() => {
                this.classList.remove('animate');
            }, 500);
        });

        // Mobile Menu Toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            const nav = document.querySelector('.main-nav');
            nav.classList.toggle('active');
            this.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.main-nav').classList.remove('active');
                document.querySelector('.mobile-menu-btn').innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize animations when elements come into view
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate-fade');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        // Initial check in case elements are already in view
        animateOnScroll();
