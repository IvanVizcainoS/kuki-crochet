//anotaciones por si se me olvida algo
const products = [
  { id: 1, name: "Makunga", price: 28.99, image: "https://i.pinimg.com/736x/48/86/f8/4886f889549e2c1e2da35482b64b6262.jpg" },
  { id: 2, name: "JoJo", price: 99.99, image: "https://paninitienda.com/cdn/shop/products/99947_d1dbb048-f68a-476b-9be6-0d96b384d41e.jpg?v=1626722962&width=1024" },
  { id: 3, name: "Sr. Lennon", price: 35.00, image: "https://preview.redd.it/hola-sr-lennon-soy-su-fan-v0-tqf85ipp4bj81.png?auto=webp&s=18429937e29b46b229530db9988d65f770c26a3b" },
  { id: 4, name: "GATO", price: 29.99, image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400" },
  { id: 5, name: "cartman", price: 42.00, image: "https://i.pinimg.com/736x/c4/5d/77/c45d77a2d03413f5eec2e39ccc788f9f.jpg" },
  { id: 6, name: "nomelaconteiner", price: 19.99, image: "https://i.pinimg.com/1200x/b9/40/44/b940449c9ba125e9468080493b7d38af.jpg" },
  { id: 7, name: "calaca", price: 12.50, image: "https://i.pinimg.com/736x/f2/e0/3f/f2e03fe629cda6e9f529272e583c1f0e.jpg" },
  { id: 8, name: "sepalabolaqueesesto", price: 31.00, image: "https://images.unsplash.com/photo-1621989149090-153874a5eac2?w=400" }
];

// MATERIALES AHORA SE AGREGAN AL CARRITO
const materials = [
  {
    id: 101,
    name: "Hilo Algodón Premium 2",
    price: 18.50,
    brand: "el emoji te mira y juzga por tus actos",
    image: "https://i.pinimg.com/736x/55/6d/1a/556d1adb1b688522507fe935a0f0edf0.jpg",
    description: "fiumbaa descripcion.",
    features: ["100% algodón", "a", "emoji", "mireeeen"]
  },
  {
    id: 102,
    name: "Relleno",
    price: 25.00,
    brand: "sepa",
    image: "https://i.pinimg.com/736x/32/f4/aa/32f4aac86061b9a2d92bbdfd4bce6746.jpg",
    description: "denme ideas.",
    features: ["denme", "ideas", "equipo", "xd"]
  },
  {
    id: 103,
    name: "Agujas de Crochet",
    price: 45.00,
    brand: "pos agujas que mas quieren",
    image: "https://i.pinimg.com/736x/47/cb/5d/47cb5d782683e3df266c913abb68b892.jpg",
    description: "Las agujas",
    features: ["a", "e", "i", "u"]
  },
  {
    id: 104,
    name: "Agujas de Crochet (otra vez)",
    price: 45.00,
    brand: "pos agujas que mas quieren",
    image: "https://i.pinimg.com/1200x/66/d3/29/66d329639100349df71279a1c84cdd9d.jpg",
    description: "AAAA",
    features: ["a", "e", "i", "u"]
  }
];

// Carrito guardado que se guarda aunque cierres el navegador osea se guarda es en local (lo uso asi mientras aprendo lo del servidor)
let cart = JSON.parse(localStorage.getItem('kukiCart')) || [];

// Elementos del DOM osea la informacion solicitus de informacion y esas vainas
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

// CARRUSEL 
let currentSlide = 0;
const totalSlides = products.length;

function renderCarousel() {
  if (!carousel) return;

  carousel.innerHTML = '';
  dotsContainer.innerHTML = '';

  products.forEach((product, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-item';
    slide.innerHTML = `<img src="${product.image}" alt="${product.name}" loading="lazy">`;
    slide.onclick = () => window.location.href = 'productos.html';
    carousel.appendChild(slide);

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

let autoSlide = setInterval(nextSlide, 5000);

if (document.querySelector('.carousel-container')) {
  document.querySelector('.carousel-container').addEventListener('mouseenter', () => clearInterval(autoSlide));
  document.querySelector('.carousel-container').addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 5000));
}

if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);

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
        <p>Hecho a mano con amor</p>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button class="btn-add" onclick="addToCart(${product.id})">
          Agregar al carrito
        </button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// Renderizar materiales con botón de agregar al carrito osea la imagencita esa que sale en la pestaña de carrito
function renderMaterials() {
  const materialsList = document.getElementById('materialsList');
  if (!materialsList) return;

  materialsList.innerHTML = '';
  materials.forEach(mat => {
    const item = document.createElement('div');
    item.className = 'material-item';
    item.innerHTML = `
      <div class="material-image">
        <img src="${mat.image}" alt="${mat.name}" loading="lazy">
      </div>
      <div class="material-info">
        <h3>${mat.name}</h3>
        <div class="brand">${mat.brand}</div>
        <div class="material-price">$${mat.price.toFixed(2)}</div>
        <p>${mat.description}</p>
        <div class="material-features">
          ${mat.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
        </div>
        <button class="btn-add-material" onclick="addMaterialToCart(${mat.id})">
          Agregar al carrito
        </button>
      </div>
    `;
    materialsList.appendChild(item);
  });
}

// Agregar material al carrito 
function addMaterialToCart(id) {
  const material = materials.find(m => m.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...material, quantity: 1 });
  }
  saveCart();
  updateCartUI();
  showNotification(`${material.name} agregado al carrito`);
}

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

//no toquen el carrusel esa vaina costo acomodarla AAAA
//nota: acortar el codigo. como? ni idea

// vaina esa que pone una vaina morada debajo de la vaina esa(por fin funciona en Productos también)
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  renderCarousel();
  renderProducts();
  renderMaterials();
  updateCartUI();
});
