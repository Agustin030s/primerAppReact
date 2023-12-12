const Contador = () => {
  let contador = 0;
  return (
    <article className="text-center mt-4">
      <h3>Contador</h3>
      <p className="fw-bold">{contador}</p>
      <button className="btn btn-primary" onClick={() => contador++}>
        +1
      </button>
    </article>
  );
};

export default Contador;
