//anotaciones por si se me olvida que eran estas vainas
//productos (ignoren las imagenes necesito placeholders)
const products = [
  { id: 1, name: "Producto", price: 28.99, image: "https://i.pinimg.com/736x/48/86/f8/4886f889549e2c1e2da35482b64b6262.jpg" },
  { id: 2, name: "Producto1", price: 32.50, image: "https://paninitienda.com/cdn/shop/products/99947_d1dbb048-f68a-476b-9be6-0d96b384d41e.jpg?v=1626722962&width=1024" },
  { id: 3, name: "Producto", price: 35.00, image: "https://preview.redd.it/hola-sr-lennon-soy-su-fan-v0-tqf85ipp4bj81.png?auto=webp&s=18429937e29b46b229530db9988d65f770c26a3b" },
  { id: 4, name: "Producto", price: 29.99, image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400" },
  { id: 5, name: "Producto", price: 42.00, image: "https://i.pinimg.com/736x/c4/5d/77/c45d77a2d03413f5eec2e39ccc788f9f.jpg" },
  { id: 6, name: "Producto", price: 19.99, image: "https://i.pinimg.com/1200x/b9/40/44/b940449c9ba125e9468080493b7d38af.jpg" },
  { id: 7, name: "Producto", price: 12.50, image: "https://i.pinimg.com/736x/f2/e0/3f/f2e03fe629cda6e9f529272e583c1f0e.jpg" },
  { id: 8, name: "Producto", price: 31.00, image: "https://images.unsplash.com/photo-1621989149090-153874a5eac2?w=400" }
];

let cart = [];

const productGrid = document.getElementById('productGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartItemsCount = document.getElementById('cartItemsCount');
const cartTotal = document.getElementById('cartTotal');

// Renderizar los pproductos
function renderProducts() {
  productGrid.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button class="btn-add" onclick="addToCart(${product.id})">
          Agregar al carrito
        </button>
      </div>
    `;
    productGrid.appendChild(productCard);
  });
}

// codigo para agregar vainas al carrito (creo que si funciona)
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  showNotification(`${product.name} agregado`);
}

// aca actualiza la "informacion" del carrito
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartItemsCount.textContent = `(${totalItems})`;

  cartItems.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align:center; color:#999; padding:2rem;">Tu carrito está vacío</p>';
  }

  cart.forEach(item => {
    total += item.price * item.quantity;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
        <div class="quantity-controls">
          <button onclick="changeQuantity(${item.id}, -1)">–</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
    `;
    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Cambiar cantidad de productosdsf
function changeQuantity(id, change) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCartUI();
    }
  }
}

// Eliminar vainas de el carrito
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
  showNotification("Producto eliminado");
}

// Abrir o cerrar carrito
cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('open');
  overlay.classList.add('active');
});

closeCart.addEventListener('click', closeCartSidebar);
overlay.addEventListener('click', closeCartSidebar);

function closeCartSidebar() {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('active');
}

// circulito ese que sale al lado del carrito no se como se llama (notificacion)
function showNotification(message) {
  // Eliminar notificación
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notif = document.createElement('div');
  notif.className = 'notification';
  notif.textContent = message;
  notif.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary);
    color: #5d5d5d;
    padding: 14px 28px;
    border-radius: 50px;
    font-size: 0.95rem;
    font-weight: 500;
    z-index: 1000;
    box-shadow: 0 8px 25px rgba(213, 168, 199, 0.3);
    animation: notifSlide 3.5s ease forwards;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.3);
  `;
  document.body.appendChild(notif);

  setTimeout(() => notif.remove(), 3500);
}

// Animación de la notificación esa 
const notifStyle = document.createElement('style');
notifStyle.textContent = `
  @keyframes notifSlide {
    0%   { opacity: 0; transform: translateX(-50%) translateY(20px); }
    15%  { opacity: 1; transform: translateX(-50%) translateY(0); }
    85%  { opacity: 1; transform: translateX(-50%) translateY(0); }
    100% { opacity: 0; transform: translateX(-50%) translateY(-15px); }
  }
`;
document.head.appendChild(notifStyle);


document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
});
