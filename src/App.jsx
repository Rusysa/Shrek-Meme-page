import { useState } from 'react';
import './App.css';


const App = () => {
  const [edad, setEdad] = useState('');

  const handleChange = (e) => {
    setEdad(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Shrek en años de vida</h1>
      <p className="paragraph">
        La película de Shrek dura <strong>1h 29 minutos</strong>, esto a cuántos años de vida tuyos equivale.
      </p>
      <img
        className="image"
        src="https://th.bing.com/th/id/OIP.d0LaA7lJQRcPcnPivLG2XQHaFj?w=222&h=180&c=7&r=0&o=5&cb=iwc2&pid=1.7"
        alt="Shrek"
      />
      <div className="input-container">
        <label className="label">
          Ingresa tu edad:
          <input
            className="input"
            type="number"
            placeholder="Años"
            value={edad}
            onChange={handleChange}
          />
        </label>
      </div>

      {edad && <Calcular edad={Number(edad)} />}
    </div>
  );
};

const Calcular = ({ edad }) => {
  // Cálculo de cuántas veces podrías ver Shrek en tu vida
  const minutosVida = edad * 365 * 24 * 60; // edad en minutos
  const duracionShrek = 89; // minutos
  const veces = Math.floor(minutosVida / duracionShrek);

  return (
    <h2>En {edad} años de vida, habrías podido ver Shrek aproximadamente {veces} veces.</h2>
  );
};

export default App;
