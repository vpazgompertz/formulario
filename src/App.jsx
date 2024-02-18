import React, { useState } from 'react';
import Registro from './components/Registro';
import Alert from './components/Alert';
import './App.css';

function App() {
  const [message, setMessage] = useState(null);

  const Registration = (success) => {
    if (success) {
      setMessage("¡Registro exitoso!");
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } else {
      setMessage("¡Completa todos los campos!");
    }
  };

  return (
    <>
      <Registro registration={Registration} />
      {message && <Alert message={message} />}
    </>
  );
}

export default App;

