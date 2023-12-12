import { useState } from "react";

const Contador = () => {
  // let contador = 0;
  const [contador, setContador] = useState(0);
  return (
    <article className="text-center mt-4">
      <h3>Contador</h3>
      <p className="fw-bold">{contador}</p>
      <button
        className="btn btn-primary"
        onClick={() => setContador(contador + 1)}
      >
        +1
      </button>
    </article>
    // Agregar una boton para decrementar
  );
};

export default Contador;
