//anotaciones por si se me olvida algo
const products = [
  { 
    id: 1, 
    name: "Pollo", 
    price: 12000, 
    image: "Pollo.jpg",
    description: "¡El pollo más tierno que todos quieren abrazar! Ideal para regalar o decorar",
    promo: "2x1" 
  },
  { 
    id: 2, 
    name: "Cheff", 
    price: 9000, 
    image: "chef.jpg",
    description: "War....war never changes"
  },
  { 
    id: 3, 
    name: "Jojo", 
    price: 140000, 
    image: "Jojo.jpg",
    description: "Pequeño jojo hecho de hilo y rellenado"
  },
  { 
    id: 4, 
    name: "Llaveros Corazon", 
    price: 2000, 
    image: "Llaveros corazon.jpg",
    description: "Llaveros con forma de corazon para regalar",
    promo: "50%"
  },
  { 
    id: 5, 
    name: "Flores crochet", 
    price: 5000, 
    image: "flores.jpg",
    description: "Variedad de flores tejidas crochet 100% tejidas",
    promo: "22%"
  },
  { 
    id: 6, 
    name: "Lllaveros Luna estrella", 
    price: 4500, 
    image: "Luna estrella.jpg",
    description: "Llaveros de Luna y estrella pareja 2x1 compra uno y regala",
    promo: "2x1"
  },
  { 
    id: 7, 
    name: "Cajas mini Ballenas", 
    price: 4000, 
    image: "cajas Ballenas.jpg",
    description: "cajas llenas de mini ballenas compra una lleva 2",
    promo: "2x1"
  },
  { 
    id: 8, 
    name: "Vault Boy", 
    price: 4000, 
    image: "https://http2.mlstatic.com/D_NQ_NP_603255-MLA82399951006_022025-O.webp",
    description: "War....war never changes"
  },
  { 
    id: 9, 
    name: "Mini Pulpos", 
    price: 9000, 
    image: "minipulpos.jpg",
    description: "mini pulpos de multiples colores"
  },
  { 
    id: 10, 
    name: "Arbolito", 
    price: 5000, 
    image: "https://i.pinimg.com/736x/5b/af/2f/5baf2f23a0199854c4a56f2ca8df54f3.jpg",
    description: "Pequeño arbol tejido"
  },
  { 
    id: 11, 
    name: "Ovejita",
    price: 5000, 
    image: "https://preview.redd.it/my-first-amigurumi-v0-23xgon3w3arf1.png?auto=webp&s=85ec4940a6a8dbf0c85ae5342abc707d3f7a3ef8",
    description: "Oveja",
    promo: "20%"
  },
  { 
    id: 12, 
    name: "Orejas Largas", 
    price: 8000, 
    image: "https://www.pixeljar.com.co/cdn/shop/files/PIXEL_JAR_Creaciones_Dani_Amigurumis_Personalizados_1.png?v=1706807582",
    description: "Conejo de orejas largas",
  }
];

const materials = [
  {
    id: 101,
    name: "Hilo para crochet",
    price: 10000,
    brand: "Hilo Utilizado para Crochet",
    image: "https://irp-cdn.multiscreensite.com/137f54ce/files/uploaded/MAXI%20ALGODON.JPG",
    description: "Esta fibra está compuesta de algodón y otras fibras recicladas. Es ideal para tejer amigurumis, blusas, sacos, bolsos, entre otros productos. Puedes tejerla en tecnicas como crochet.",
    features: ["100% algodón", "Premiun", "Alta Calidad", "Resistente"]
  },
  {
    id: 102,
    name: "Relleno",
    price: 6000,
    brand: "sepa",
    image: "https://m.media-amazon.com/images/I/61GNLecWBCL.jpg",
    description: "Algodón Siliconado en paquete por 100 gramos, es una fibra antibacteriana, antialérgica y antiácaros, además es lavable, durable y resistente perfecta para rellenar tus amigurumis y todo tipo de manualidades..",
    features: ["siliconado", "Relleno", "Suave", "Resistente"]
  },
  {
    id: 103,
    name: "Agujas de Crochet",
    price: 5500,
    brand: "Agujas Crochet diferentes medidas",
    image: "agujas.jpg",
    description: "Este set de agujas de crochet viene con 8 agujas. Diferentes medidas para que tejas todos los calibres delgados de lana. Su mango de silicona las hace una de las favoritas de nuestros tejedores.",
    features: ["Diferentes Medidas", "Metalicas", "Mango Silicona", "Precisas", "inoxidables"]
  },
  {
    id: 104,
    name: "Tijeras",
    price: 3500,
    brand: "Tijeras Para Crochet",
    image: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00694128878877L3.jpg",
    description: "paquete de 2 tijeras de 11 pulgadas, corte preciso, cuchillas de acero inoxidable de la más alta calidad, bordes afilados y larga vida útil de corte. Para decoupage, cartón, tela, fotos, etc.",
    features: ["Acero inoxidable", "multiusos", "Azul y rosa", "Mango de goma"]
  },
  {
    id: 105,
    name: "Aguja Lanera clasica",
    price: 1500,
    brand: "Aguja lanera para coser las partes",
    image: "Aguja lanera.jpg ",
    description: "Aguja lanera punta roma Ideal para lanas de grosor medio y para esconder las hebras sueltas del tejido el Numero de la aguja depende del grosor de la lana a emplear.",
    features: ["Acero inoxidable", "Punta roma", "Multiples medidas"]
  },
  {
    id: 106,
    name: "Pack 100 Ojos y narices de seguridad",
    price: 6500,
    brand: "Lotes de Ojos y narices para crochet",
    image: "Ojos.jpg",
    description: "Diferentes piezas de ojos y narices de seguridad, juego de manualidades con caja de almacenamiento",
    features: ["plástico duradero", "tamaños y formas variadas", "Colores Variados","Almacenamiento incluido"]
  },
  {
    id: 107,
    name: "Marcadores de Puntos X20",
    price: 2500,
    brand: "Lote de 20",
    image: "Ganchos.jpg",
    description: "Set de marcadores tipo imperdible para crochet. 10 colores diferentes para organizar tus tejidos. Fáciles de usar, no dañan el hilo. Ideales para mochilas, amigurumis y prendas",
    features: ["Metálicos", "Pintados", "Lote de 20"]
  }
];

let cart = JSON.parse(localStorage.getItem('kukiCart')) || [];

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

let currentSlide = 0;
const totalSlides = products.length;

// esto es pa ponerl los precios en pesos colombianos
function formatCOP(number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
}

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
        <div class="price">${formatCOP(product.price)}</div>
        <button class="btn-add" onclick="addToCart(${product.id})">
          Agregar al carrito
        </button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

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
        <div class="material-price">${formatCOP(mat.price)}</div>
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
        <p>${formatCOP(item.price)}</p>
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

  if (cartTotal) cartTotal.textContent = formatCOP(total);
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

// esto es para cuando se finaliza la compra
function createModal(type) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'modal' + (type === 'invoice' ? 'Invoice' : 'Success');

  if (type === 'invoice') {
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Resumen de tu <span>compra</span></h3>
        <div class="invoice-details" id="invoiceDetails"></div>
        <div class="modal-buttons">
          <button class="btn-modal btn-cancel" onclick="closeModal('modalInvoice')">Cancelar</button>
          <button class="btn-modal btn-confirm" onclick="confirmPurchase()">Confirmar compra</button>
        </div>
      </div>
    `;
  } else {
    modal.innerHTML = `
      <div class="modal-content">
        <h3>¡Gracias por tu compra!</h3>
        <p>Tu pedido está siendo preparado con mucho cariño</p>
        <div style="font-size:4rem;margin:1rem 0;">Tejido</div>
        <button class="btn-modal btn-confirm" onclick="closeModal('modalSuccess'); closeCartSidebar();">¡Genial!</button>
      </div>
    `;
  }
  document.body.appendChild(modal);
}

function showInvoice() {
  if (cart.length === 0) {
    showNotification("Tu carrito está vacío");
    return;
  }

  if (!document.getElementById('modalInvoice')) createModal('invoice');
  if (!document.getElementById('modalSuccess')) createModal('success');

  const details = document.getElementById('invoiceDetails');
  let subtotal = 0;
  let html = '';

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    html += `<p><span>${item.name} × ${item.quantity}</span> <strong>${formatCOP(itemTotal)}</strong></p>`;
  });

  const envio = subtotal > 0 ? 15000 : 0;
  const total = subtotal + envio;

  html += `<p><span>Envío</span> <strong>${formatCOP(envio)}</strong></p>`;
  html += `<p class="total-invoice"><span>TOTAL</span> <strong>${formatCOP(total)}</strong></p>`;

  details.innerHTML = html;
  document.getElementById('modalInvoice').classList.add('active');
}

function confirmPurchase() {
  document.getElementById('modalInvoice').classList.remove('active');
  document.getElementById('modalSuccess').classList.add('active');
  
  cart = [];
  localStorage.removeItem('kukiCart');
  updateCartUI();
  showNotification("¡Compra realizada con éxito!");
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-checkout') || e.target.closest('.btn-checkout')) {
    showInvoice();
  }
});

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
