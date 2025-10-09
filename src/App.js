import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./products";
import Register from "./register";
import "./App.css";

export default function App() {
  useEffect(() => {
    document.title = "Weigamer • Consolas retro y actuales";
  }, []);

  const Home = () => (
    <div className="container">
      <section className="hero">
        <div>
          <h1 className="title">Weigamer</h1>
          <p className="subtitle">
            Tienda de consolas <b>retro y actuales</b>. Colecciona recuerdos, juega el presente.
          </p>
          <div className="header-cta">
            <Link className="btn" to="/products">Ver productos</Link>
            <Link className="btn secondary" to="/register">Registrarse</Link>
          </div>
          <p style={{ marginTop: "1rem", color: "#9ca3af" }}></p>
        </div>
        <div className="card">
          <img
            src="/assets/img/icon.png"
            alt="Hero"
            style={{ width: "100%", borderRadius: ".75rem", border: "1px solid #243074" }}
          />
        </div>
      </section>
      <section className="grid products" id="home-products"></section>
    </div>
  );

  return (
    <div>
      <nav className="nav">
        <div className="container nav-inner">
          <Link to="/" className="logo">
            <img src="/assets/img/icon.png" alt="Weigamer" />
            <span>Weigamer</span>
          </Link>
          <div className="menu">
            <Link to="/" className="btn secondary">Inicio</Link>
            <Link to="/products" className="btn">Productos</Link>
            <Link to="/register" className="btn">Registro</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
