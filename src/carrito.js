// public/assets/js/cart.js
(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const PRODUCTS_KEY = "weigamer_products";
  const CART_KEY = "weigamer_cart";

  function getProducts() {
    try {
      return JSON.parse(localStorage.getItem(PRODUCTS_KEY) || "[]");
    } catch {
      return [];
    }
  }

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    } catch {
      return [];
    }
  }

  function setCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }

  function updateQty(id, qty) {
    qty = Math.max(1, parseInt(qty || "1", 10));
    const cart = getCart();
    const i = cart.findIndex((x) => x.id === id);
    if (i >= 0) {
      cart[i].qty = qty;
      setCart(cart);
    }
  }

  function removeFromCart(id) {
    const cart = getCart().filter((x) => x.id !== id);
    setCart(cart);
  }

  function cartTotal() {
    const cart = getCart();
    const products = getProducts();
    return cart.reduce((acc, item) => {
      const p = products.find((pp) => pp.id === item.id);
      return p ? acc + p.price * item.qty : acc;
    }, 0);
  }

  function renderCart() {
    const area = $("#cart-area");
    const cart = getCart();
    const products = getProducts();

    if (!area) return;

    if (cart.length === 0) {
      area.innerHTML = '<div class="card">Tu carrito está vacío.</div>';
      return;
    }

    const rows = cart
      .map((item) => {
        const p = products.find((pp) => pp.id === item.id);
        if (!p) return "";
        return `
          <tr>
            <td style="display:flex;align-items:center;gap:.75rem">
              <img src="${p.img}" style="width:72px;height:52px;object-fit:cover;border-radius:.5rem;border:1px solid #22306b"/>
              ${p.name}<br/><span class="badge">${p.category}</span>
            </td>
            <td>${p.price.toFixed(2)} USD</td>
            <td><input type="number" min="1" value="${item.qty}" data-qty="${p.id}" style="width:90px"/></td>
            <td>${(p.price * item.qty).toFixed(2)} USD</td>
            <td><button class="btn secondary" data-remove="${p.id}">Quitar</button></td>
          </tr>`;
      })
      .join("");

    const total = cartTotal().toFixed(2);

    area.innerHTML = `
      <div class="card">
        <table class="table">
          <thead>
            <tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th><th></th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:1rem">
          <a class="btn secondary" href="products.html">Seguir comprando</a>
          <div>
            Total: <b>${total} USD</b>
            <button class="btn" id="checkout">Pagar (simulado)</button>
          </div>
        </div>
      </div>`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCart();

    document.body.addEventListener("input", (e) => {
      const el = e.target.closest("[data-qty]");
      if (el) {
        updateQty(el.getAttribute("data-qty"), el.value);
        renderCart();
      }
    });

    document.body.addEventListener("click", (e) => {
      const rem = e.target.closest("[data-remove]");
      if (rem) {
        removeFromCart(rem.getAttribute("data-remove"));
        renderCart();
      }
      if (e.target.id === "checkout") {
        alert("Compra simulada. En futuras entregas se conectará a backend.");
        setCart([]);
        renderCart();
      }
    });
  });

  // Opcional: expone helpers por si los necesitas en otros scripts
  window.getCart = getCart;
  window.setCart = setCart;
  window.updateQty = updateQty;
  window.removeFromCart = removeFromCart;
  window.cartTotal = cartTotal;
  window.renderCart = renderCart;
})();
