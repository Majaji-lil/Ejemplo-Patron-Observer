import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Ejemplo Observer en React</h1>

      {/* Observers */}
      <MostrarContador contador={contador} />
      <Mensaje contador={contador} />

      {/* Acción que cambia el estado */}
      <Boton incrementar={() => setContador(contador + 1)} />
    </div>
  );
}

// Observer 1
function MostrarContador({ contador }) {
  return <h2>Contador: {contador}</h2>;
}

// Observer 2
function Mensaje({ contador }) {
  return (
    <p>
      {contador >= 5
        ? "Ya llegaste a 5 👀"
        : "Sigue presionando el botón"}
    </p>
  );
}

// Cambia el estado
function Boton({ incrementar }) {
  return <button onClick={incrementar}>Sumar</button>;
}

export default App;