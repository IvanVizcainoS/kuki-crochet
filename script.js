// anotaciones por si se me olvida que eran estas vainas
//tranquilos las imagenes solo las voy a usar como placeholder
const products = [
  { id: 1, name: "makunga", price: 28.99, image: "https://i.pinimg.com/736x/48/86/f8/4886f889549e2c1e2da35482b64b6262.jpg" },
  { id: 2, name: "JoJo", price: 99.99, image: "https://paninitienda.com/cdn/shop/products/99947_d1dbb048-f68a-476b-9be6-0d96b384d41e.jpg?v=1626722962&width=1024" },
  { id: 3, name: "Sr. Lennon", price: 35.00, image: "https://preview.redd.it/hola-sr-lennon-soy-su-fan-v0-tqf85ipp4bj81.png?auto=webp&s=18429937e29b46b229530db9988d65f770c26a3b" },
  { id: 4, name: "GATO", price: 29.99, image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400" },
  { id: 5, name: "cartman", price: 42.00, image: "https://i.pinimg.com/736x/c4/5d/77/c45d77a2d03413f5eec2e39ccc788f9f.jpg" },
  { id: 6, name: "no me la conteiner", price: 19.99, image: "https://i.pinimg.com/1200x/b9/40/44/b940449c9ba125e9468080493b7d38af.jpg" },
  { id: 7, name: "calaca", price: 12.50, image: "https://i.pinimg.com/736x/f2/e0/3f/f2e03fe629cda6e9f529272e583c1f0e.jpg" },
  { id: 8, name: "nose", price: 31.00, image: "https://images.unsplash.com/photo-1621989149090-153874a5eac2?w=400" }
];

// Carrito guardado aunque cierres el navegador
let cart = JSON.parse(localStorage.getItem('kukiCart')) || [];

// Elementos del DOM
const productGrid = document.getElementById('productGrid');
const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartItemsCount = document.getElementById('cartItemsCount');
const cartTotal = document.getElementById('cartTotal');

// CARRUSEL EN INDEX
let currentSlide = 0;
const totalSlides = products.length;

function renderCarousel() {
  if (!carousel) return;

  carousel.innerHTML = '';
  dotsContainer.innerHTML = '';

  products.forEach((product, index) => {
    // Imagen del carrusel
    const slide = document.createElement('div');
    slide.className = 'carousel-item';
    slide.innerHTML = `<img src="${product.image}" alt="${product.name}" loading="lazy">`;
    slide.onclick = () => window.location.href = 'productos.html';
    carousel.appendChild(slide);

    // Punto indicador
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });

  updateCarousel();
}

function updateCarousel() {
  if (!carousel) return;
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Autopasadda cada 5 segundos
let autoSlide = setInterval(nextSlide, 5000);

// Pausar carrusel al pasar el mouse encima jskldaksjdla
if (document.querySelector('.carousel-container')) {
  document.querySelector('.carousel-container').addEventListener('mouseenter', () => clearInterval(autoSlide));
  document.querySelector('.carousel-container').addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 5000));
}

// Botones del carrusel
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);

// Renderizar productos solo en productos.html
function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>producto</p>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button class="btn-add" onclick="addToCart(${product.id})">
          Agregar al carrito
        </button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// codigo para agregar vainas al carrito (creo que si funciona)
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCartUI();
  showNotification(`${product.name} agregado`);
}

function saveCart() {
  localStorage.setItem('kukiCart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) cartCount.textContent = totalItems;
  if (cartItemsCount) cartItemsCount.textContent = `(${totalItems})`;

  if (!cartItems) return;
  cartItems.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align:center; color:#bbb; padding:2rem;">Tu carrito está vacío</p>';
  }

  cart.forEach(item => {
    total += item.price * item.quantity;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
        <div class="quantity-controls">
          <button onclick="changeQuantity(${item.id},-1)">–</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${item.id},1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
    `;
    cartItems.appendChild(el);
  });

  if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
}

function changeQuantity(id, change) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) removeFromCart(id);
    else { saveCart(); updateCartUI(); }
  }
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  showNotification("Producto eliminado");
}

if (cartBtn) cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('open');
  overlay.classList.add('active');
});
if (closeCart) closeCart.addEventListener('click', closeCartSidebar);
if (overlay) overlay.addEventListener('click', closeCartSidebar);

function closeCartSidebar() {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('active');
}

// circulito ese que sale al lado del carrito no se como se llama (notificacion)
function showNotification(message) {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notif = document.createElement('div');
  notif.className = 'notification';
  notif.textContent = message;
  notif.style.cssText = `
    position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
    background:var(--primary); color:#5d5d5d; padding:14px 32px;
    border-radius:50px; font-weight:500; z-index:1000;
    box-shadow:0 10px 30px rgba(213,168,199,0.4);
    animation:notifSlide 3.5s ease forwards;
  `;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3500);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes notifSlide {
    0%,100% { opacity:0; transform:translateX(-50%) translateY(20px); }
    15%,85% { opacity:1; transform:translateX(-50%) translateY(0); }
  }
`;
document.head.appendChild(style);

// Inicializar todo
document.addEventListener('DOMContentLoaded', () => {
  renderCarousel();
  renderProducts();
  updateCartUI();
});
