import React, { useState } from "react";

const Formulario = ({ registration }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const validateData = (e) => {
    e.preventDefault();

    if (!name || !mail || !password || !pass) {
      setError("¡Completa todos los campos!");
      return;
    }

    if (password.length < 8) {
      setError("Su contraseña debe tener un mínimo de 8 caracteres");
      return;
    }

    const isValidEmail = (value) => {
      const email =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return email.test(value);
    };

    if (!isValidEmail(mail)) {
      setError("el mail no es válido");
      return;
    }

    if (password !== pass) {
      setError("Las contraseñas no coinciden");
      return;
    }

    registration(true);

    setError("");
    setName("");
    setMail("");
    setPassword("");
    setPass("");
  };

  return (
    <div className="form-container">
      <p>o usa tu e-mail para registrarte</p>
      <form className="formulario" onSubmit={validateData}>
     
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="mail"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="pass-confirm"
            className="form-control"
            placeholder="Confirmar contraseña"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        
        <button className="btn btn-dark mt-3" type="submit">
          Registrarse
        </button>
        {error && <p>{error}</p>}
      </form>
      </div>
  );
};

export default Formulario;
