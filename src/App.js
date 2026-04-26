
import './App.css';
import { useState } from "react"

function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mostrarOcultar, setMostrarOcultar] = useState(false);

  const calcularFibonacci = (num) => {
    const n = parseInt(num);
    if (isNaN(n) || n < 0) return null;

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNumero(value);
    const fibResult = calcularFibonacci(value);
    setResultado(fibResult);
  };

  const toggleMostrar = () => {
    setMostrarOcultar(!mostrarOcultar);
  };

  const handleBorrar = () => {
    setNumero('');
    setResultado(null);
    setMostrarOcultar(false);
  };

  return (
    <div className="app-container">
      <div className="hero-section">
        <h1 className="titulo">Función Fibonacci</h1>
        <div className="subtitle">
          <p>La secuencia infinita de números naturales donde cada término es la suma de los dos anteriores</p>
          <p className="formula">f(n) = f(n-1) + f(n-2)</p>
        </div>
      </div>

      <div className="calculator-section">
        <div className="input-group">
          <label htmlFor="fibonacci-input" className="input-label">
            Ingrese un número (n ≥ 0):
          </label>
          <input
            id="fibonacci-input"
            className="numero"
            placeholder="Ej: 10"
            type="number"
            min="0"
            value={numero}
            onChange={handleInputChange}
          />
        </div>

        <div className="button-group">
          <button
            className="boton mostrar"
            onClick={toggleMostrar}
            disabled={!numero || resultado === null}
          >
            {mostrarOcultar ? '🔽 Ocultar Resultado' : '🔍 Mostrar Resultado'}
          </button>
          <button className="boton borrar" onClick={handleBorrar}>
            🗑️ Borrar
          </button>
        </div>

        {mostrarOcultar && resultado !== null && (
          <div className="resultado-container">
            <div className="resultado-card">
              <h3 className="resultado-titulo">Resultado</h3>
              <div className="resultado-valor">
                f({numero}) = <span className="numero-resultado">{resultado}</span>
              </div>
              <p className="resultado-descripcion">
                El {numero}º número de Fibonacci es: <strong>{resultado}</strong>
              </p>
            </div>
          </div>
        )}
      </div>

      <footer className="footer">
        <p><strong>Realizado por Juan Carlos Iasenza</strong></p>
      </footer>
    </div>
  );
}

export default App;
