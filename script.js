//anotaciones por si se me olvida algo
const products = [
  { 
    id: 1, 
    name: "Pollo", 
    price: 28.99, 
    image: "pollo.jpg",
    description: "¡El pollo más tierno que todos quieren abrazar! Ideal para regalar o decorar",
    promo: "2x1" // ← Promocion. porque costo tanto hacer esto? me tomo una hora
  },
  { 
    id: 2, 
    name: "Cheff", 
    price: 99.99, 
    image: "Chef.jpg",
    description: "War....war never changes"
  },
  { 
    id: 3, 
    name: "Jojo", 
    price: 35.00, 
    image: "jojo.jpg",
    description: "Pequeño jojo hecho de hilo y rellenado"
  },
  { 
    id: 4, 
    name: "Llaveros Corazon", 
    price: 29.99, 
    image: "Llaveros corazon.jpg",
    description: "Llaveros con forma de corazon para regalar",
    promo: "50%"
  },
  { 
    id: 5, 
    name: "Flores crochet", 
    price: 42.00, 
    image: "Flores.jpg",
    description: "Variedad de flores tejidas crochet 100% tejidas",
    promo: "22%"
  },
  { 
    id: 6, 
    name: "Lllaveros Luna estrella", 
    price: 19.99, 
    image: "Luna estrella.jpg",
    description: "Llaveros de Luna y estrella pareja 2x1 compra uno y regala",
    promo: "2x1"
  },
  { 
    id: 7, 
    name: "Cajas mini Ballenas", 
    price: 12.50, 
    image: "Cajas Ballenas.jpg",
    description: "cajas llenas de mini ballenas compra una lleva 2",
    promo: "2x1"
  },
  { 
    id: 8, 
    name: "Vault Boy", 
    price: 31.00, 
    image: "https://http2.mlstatic.com/D_NQ_NP_603255-MLA82399951006_022025-O.webp",
    description: "War....war never changes"
  },
  { 
    id: 9, 
    name: "Mini Pulpos", 
    price: 31.00, 
    image: "minipulpos.jpg",
    description: "mini pulpos de multiples colores"
  },
  { 
    id: 10, 
    name: "Conejo", 
    price: 31.00, 
    image: "https://www.crochetisimo.com/wp-content/uploads/2024/03/Conejita-amigurumi-coke.png",
    description: "Pequeño conejo tejido"
  },
  { 
    id: 11, 
    name: "Arbolitos Navideños", 
    price: 12.50, 
    image: "https://preview.redd.it/my-first-amigurumi-v0-23xgon3w3arf1.png?auto=webp&s=85ec4940a6a8dbf0c85ae5342abc707d3f7a3ef8",
    description: "Desde....se siente que llega diciembre",
    promo: "2x1+20%"
  },
  { 
    id: 12, 
    name: "Orejas Largas", 
    price: 22.50, 
    image: "https://www.pixeljar.com.co/cdn/shop/files/PIXEL_JAR_Creaciones_Dani_Amigurumis_Personalizados_1.png?v=1706807582",
    description: "Conejo de orejas largas",
  }
];

// carrito materiales
const materials = [
  {
    id: 101,
    name: "Hilo para crochet",
    price: 18.50,
    brand: "Hilo Utilizado para Crochet",
    image: "https://irp-cdn.multiscreensite.com/137f54ce/files/uploaded/MAXI%20ALGODON.JPG",
    description: "Esta fibra está compuesta de algodón y otras fibras recicladas. Es ideal para tejer amigurumis, blusas, sacos, bolsos, entre otros productos. Puedes tejerla en tecnicas como crochet.",
    features: ["100% algodón", "Premiun", "Alta Calidad", "Resistente"]
  },
  {
    id: 102,
    name: "Relleno",
    price: 25.00,
    brand: "sepa",
    image: "https://m.media-amazon.com/images/I/61GNLecWBCL.jpg",
    description: "Algodón Siliconado en paquete por 100 gramos, es una fibra antibacteriana, antialérgica y antiácaros, además es lavable, durable y resistente perfecta para rellenar tus amigurumis y todo tipo de manualidades..",
    features: ["siliconado", "Relleno", "Suave", "Resistente"]
  },
  {
    id: 103,
    name: "Agujas de Crochet",
    price: 45.00,
    brand: "Agujas Crochet diferentes medidas",
    image: "agujas.jpg",
    description: "Este set de agujas de crochet viene con 8 agujas. Diferentes medidas para que tejas todos los calibres delgados de lana. Su mango de silicona las hace una de las favoritas de nuestros tejedores.",
    features: ["Diferentes Medidas", "Metalicas", "Mango Silicona", "Precisas", "inoxidables"]
  },
  {
    id: 104,
    name: "Tijeras",
    price: 45.00,
    brand: "Tijeras Para Crochet",
    image: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00694128878877L3.jpg",
    description: "paquete de 2 tijeras de 11 pulgadas, corte preciso, cuchillas de acero inoxidable de la más alta calidad, bordes afilados y larga vida útil de corte. Para decoupage, cartón, tela, fotos, etc.",
    features: ["Acero inoxidable", "multiusos", "Azul y rosa", "Mango de goma"]
  },
  {
    id: 105,
    name: "Aguja Lanera clasica",
    price: 45.00,
    brand: "Aguja lanera para coser las partes",
    image: "Aguja lanera.jpg ",
    description: "Aguja lanera punta roma Ideal para lanas de grosor medio y para esconder las hebras sueltas del tejido el Numero de la aguja depende del grosor de la lana a emplear.",
    features: ["Acero inoxidable", "Punta roma", "Multiples medidas"]
  },
  {
    id: 106,
    name: "Pack 100 Ojos y narices de seguridad",
    price: 45.00,
    brand: "Lotes de Ojos y narices para crochet",
    image: "Ojos.jpg",
    description: "Diferentes piezas de ojos y narices de seguridad, juego de manualidades con caja de almacenamiento",
    features: ["plástico duradero", "tamaños y formas variadas", "Colores Variados","Almacenamiento incluido"]
  },
  {
    id: 107,
    name: "Marcadores de Puntos X20",
    price: 45.00,
    brand: "Lote de 20",
    image: "Ganchos.jpg",
    description: "Set de marcadores tipo imperdible para crochet. 10 colores diferentes para organizar tus tejidos. Fáciles de usar, no dañan el hilo. Ideales para mochilas, amigurumis y prendas",
    features: ["Metálicos", "Pintados", "Lote de 20"]
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

// RENDER PRODUCTOS CON DESCRIPCIONES ÚNICAS Y PROMO 2X1
function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    let promoHTML = '';
    if (product.promo) {
      promoHTML = `<span class="promo-badge">${product.promo}</span>`;
    }

    card.innerHTML = `
      ${promoHTML}
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button class="btn-add" onclick="addToCart(${product.id})">
          Agregar al carrito
        </button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// Renderizar materiales con botón de agregar al carrito
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

//nota: acortar el codigo. como? ni idea

// linea morada debajo de pagina
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
