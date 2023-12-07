const Contador = () => {
  let contador = 0;
  return (
    <article className="text-center">
      <h3>Contador</h3>
      <p className="fw-bold">10</p>
      <button className="btn btn-primary" id="btnIncrementar">
        +1
      </button>
    </article>
  );
};

export default Contador;
