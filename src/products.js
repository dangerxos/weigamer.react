import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Weigamer • Productos";
    const seedProducts = () => {
      const p = [
        { id: "SWITCH-OLED", name: "Nintendo Switch OLED", price: 349.99, category: "Actual", stock: 15, img: "/assets/img/oled.png", desc: "Consola híbrida con pantalla OLED 7”." },
        { id: "PS5-SLIM", name: "PlayStation 5 Slim", price: 499.99, category: "Actual", stock: 10, img: "/assets/img/slim.png", desc: "Gráficos de última generación y SSD ultrarrápido." },
        { id: "XSX", name: "Xbox Series X", price: 499.99, category: "Actual", stock: 9, img: "/assets/img/seriesx.png", desc: "Potencia de sobremesa con 4K sólido." },
        { id: "GBA-SP", name: "Game Boy Advance SP", price: 129.99, category: "Retro", stock: 7, img: "/assets/img/boy.png", desc: "Portátil clásica retroiluminada, plegable." },
        { id: "N64", name: "Nintendo 64", price: 159.0, category: "Retro", stock: 5, img: "/assets/img/64.png", desc: "Mítica consola de 64 bits." },
        { id: "PS2", name: "PlayStation 2", price: 149.0, category: "Retro", stock: 8, img: "/assets/img/play2.png", desc: "La consola más vendida de la historia." }
      ];
      localStorage.setItem("weigamer_products", JSON.stringify(p));
      return p;
    };
    setProducts(seedProducts());
  }, []);

  const addToCart = (id) => {
    console.log("Añadido al carrito:", id);
  };

  return (
    <div className="container">
      <h1>Productos</h1>
      <p className="subtitle">Lista completa de consolas en venta.</p>
      <div className="grid products" id="products">
        {products.map((prod) => (
          <article className="card product" key={prod.id}>
            <img src={prod.img} alt={prod.name} />
            <h3>{prod.name}</h3>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="badge">{prod.category}</span>
              <b>{prod.price.toFixed(2)} USD</b>
            </div>
            <div className="actions">
              <button className="btn" onClick={() => addToCart(prod.id)}>Añadir</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
