import Informacion from "./components/Informacion";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //aqui vamos a agregar la lógica del componente, lo más importante
  return (
    //aqui va un poquito más de lógica
    //luego va el maquetado del componente
    <section className="container my-4">
      <h1 className="text-center display-3">Primer App de React</h1>
      <Informacion tituloSecundario='Este titulo fue creado con props' ></Informacion>
      {/* <Informacion /> */}
    </section>
  );
}

export default App;
