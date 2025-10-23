import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// Asume que 'Products' y 'Register' son componentes reales
import Products from "./products"; 
import Register from "./register";
import "./App.css";

// Nota: La imagen 'icon.png' DEBE estar en la carpeta 'public/img'
const ICON_PATH = "/icon.png"; 

export default function App() {
  // Establece el título de la pestaña del navegador
  useEffect(() => {
    document.title = "Weigamer • Consolas retro y actuales";
  }, []);

  const Home = () => (
    <div className="container">
      <section className="hero">
        <div>
          <h1 className="title">Weigamer</h1>
          <p className="subtitle">
            Tienda de consolas <b>retro y actuales</b>. Colecciona recuerdos, juega el presente 🎮
          </p>
          <div className="header-cta">
            <Link className="btn" to="/products">Ver productos</Link>
            <Link className="btn secondary" to="/register">Registrarse</Link>
          </div>
        </div>

        {/* Hero principal: Esta es la imagen grande */}
        <div className="card">
          <img
            src={ICON_PATH} // Ruta correcta para 'public/img/icon.png'
            alt="Icono del Héroe o consola"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: ".75rem",
              border: "1px solid #243074",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      </section>

      <section className="grid products" id="home-products"></section>
    </div>
  );

  return (
    <div>
      {/* Navegación superior */}
      <nav className="nav">
        <div className="container nav-inner">
          <Link to="/" className="logo">
            <img
              src={ICON_PATH} // Ruta correcta para 'public/img/icon.png'
              alt="Weigamer Logo"
              style={{ width: "40px", height: "40px", borderRadius: "8px", border: "1px solid #263163" }}
            />
            <span>Weigamer</span>
          </Link>

          <div className="menu">
            <Link to="/" className="btn secondary">Inicio</Link>
            <Link to="/products" className="btn">Productos</Link>
            <Link to="/register" className="btn">Registro</Link>
          </div>
        </div>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
