import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Weigamer • Productos";

    const p = [
      { id: "SWITCH-OLED", name: "Nintendo Switch OLED", price: 349.99, category: "Actual", stock: 15, img: "oled.png", desc: "Consola híbrida con pantalla OLED 7”." },
      { id: "PS5-SLIM", name: "PlayStation 5 Slim", price: 499.99, category: "Actual", stock: 10, img: "slim.png", desc: "Gráficos de última generación y SSD ultrarrápido." },
      { id: "XSX", name: "Xbox Series X", price: 499.99, category: "Actual", stock: 9, img: "seriesx.png", desc: "Potencia de sobremesa con 4K sólido." },
      { id: "GBA-SP", name: "Game Boy Advance SP", price: 129.99, category: "Retro", stock: 7, img: "boy.png", desc: "Portátil clásica retroiluminada, plegable." },
      { id: "N64", name: "Nintendo 64", price: 159.0, category: "Retro", stock: 5, img: "64.png", desc: "Mítica consola de 64 bits." },
      { id: "PS2", name: "PlayStation 2", price: 149.0, category: "Retro", stock: 8, img: "play2.png", desc: "La consola más vendida de la historia." }
    ];

    localStorage.setItem("weigamer_products", JSON.stringify(p));
    setProducts(p);
  }, []);

  const addToCart = (id) => {
    console.log("Añadido al carrito:", id);
  };

  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.title}>Productos</h1>
      <p style={styles.subtitle}>Lista completa de consolas en venta.</p>

      <div style={styles.grid}>
        {products.map((prod) => (
          <article key={prod.id} style={styles.card}>
            <img
              src={`/img/${prod.img}`}
              alt={prod.name}
              loading="lazy"
              style={styles.image}
            />

            <h3 style={styles.name}>{prod.name}</h3>

            <div style={styles.infoRow}>
              <span
                style={{
                  ...styles.badge,
                  backgroundColor: prod.category === "Retro" ? "#2f2040" : "#1e4033",
                }}
              >
                {prod.category}
              </span>
              <b style={styles.price}>{prod.price.toFixed(2)} USD</b>
            </div>

            <button
              onClick={() => addToCart(prod.id)}
              style={styles.button}
            >
              Añadir
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

// 🎮 Estilos en JS (inline)
const styles = {
  container: {
    padding: "2rem",
    color: "#fff",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "0.3rem",
  },
  subtitle: {
    color: "#a3b3c9",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: "14px",
    padding: "1rem",
    boxShadow: "0 0 15px rgba(0,0,0,0.4)",
    transition: "all 0.25s ease",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "0.8rem",
    transition: "transform 0.25s ease, filter 0.25s ease",
  },
  name: {
    fontSize: "1.05rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  badge: {
    fontSize: "0.8rem",
    padding: "4px 10px",
    borderRadius: "999px",
    color: "#cfd6e6",
  },
  price: {
    color: "#9ee0b5",
  },
  button: {
    width: "100%",
    backgroundColor: "#10b981",
    color: "#0b0f15",
    border: "none",
    padding: "0.5rem 0",
    fontWeight: "600",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.2s ease",
  },
};

// Efecto hover (simple pero elegante)
styles.card[':hover'] = {
  transform: "translateY(-5px)",
  boxShadow: "0 12px 25px rgba(0,0,0,0.35)",
};
styles.image[':hover'] = {
  transform: "scale(1.03)",
  filter: "brightness(1.07)",
};
