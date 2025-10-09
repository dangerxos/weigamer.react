import { useEffect, useRef } from "react";

export default function Register() {
  const formRef = useRef(null);

  useEffect(() => {
    document.title = "Weigamer • Registro";

    const regionEl = document.getElementById("region");
    const comunaEl = document.getElementById("comuna");

    if (typeof window !== "undefined" && typeof window.populateRegiones === "function") {
      window.populateRegiones(regionEl, comunaEl);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (typeof window !== "undefined" && typeof window.validateForm === "function") {
      const ok = window.validateForm(formRef.current);
      if (!ok) return;
    }

    const data = Object.fromEntries(new FormData(formRef.current).entries());
    console.log("Registro enviado:", data);
    alert("Cuenta creada correctamente (demo).");
  };

  return (
    <div className="container">
      <h1>Registro</h1>
      <div className="card">
        <form id="register-form" data-validate ref={formRef} onSubmit={onSubmit}>
          <div className="row-4">
            <div>
              <label>RUN (sin puntos ni guion)</label>
              <input name="run" data-rule="required|run|min:0" placeholder="19011022K" />
            </div>
            <div>
              <label>Nombre</label>
              <input name="nombre" data-rule="required|maxlen:50" />
            </div>
            <div>
              <label>Apellidos</label>
              <input name="apellidos" data-rule="required|maxlen:100" />
            </div>
            <div>
              <label>Correo</label>
              <input name="correo" data-rule="required|email-domain|maxlen:100" placeholder="usuario@duoc.cl" />
            </div>
          </div>

          <div className="row-3">
            <div>
              <label>Fecha Nacimiento</label>
              <input type="date" name="fecha" />
            </div>
            <div>
              <label>Región</label>
              <select id="region" name="region"></select>
            </div>
            <div>
              <label>Comuna</label>
              <select id="comuna" name="comuna"></select>
            </div>
          </div>

          <div>
            <label>Dirección</label>
            <input name="direccion" data-rule="required|maxlen:300" />
          </div>

          <div className="actions">
            <button className="btn" type="submit">Crear cuenta</button>
          </div>
        </form>
      </div>
    </div>
  );
}
