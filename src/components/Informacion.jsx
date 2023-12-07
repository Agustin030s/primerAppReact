const Informacion = (props) => {
  return (
    <section>
      <h2>Conceptos básicos de React</h2>
      <h3>{props.tituloSecundario}</h3>
      <p>
        React es una biblioteca de JavaScript desarrollada por Facebook que se
        utiliza para construir interfaces de usuario interactivas y eficientes.
        Su enfoque se centra en la creación de componentes reutilizables que
        representan diferentes partes de la interfaz de usuario. React utiliza
        un paradigma de programación declarativa, lo que significa que los
        desarrolladores describen cómo debería ser la interfaz de usuario y
        React se encarga de manejar los cambios de manera eficiente.
      </p>

      <ol className="list-group">
        <li className="list-group-item">
          Componentes: Son bloques de construcción fundamentales en React.
          Representan partes específicas de la interfaz de usuario y pueden
          contener lógica y estado propios.
        </li>
        <li className="list-group-item">
          Propiedades (Props): Son datos que se pasan de un componente padre a
          un componente hijo. Permiten la comunicación entre componentes.
        </li>
        <li className="list-group-item">
          Estado (State): Es un objeto que representa la información interna de
          un componente. Cuando el estado de un componente cambia, React se
          encarga de actualizar la interfaz de usuario de manera eficiente.
        </li>
        <li className="list-group-item">
          Ciclo de vida (Lifecycle): React proporciona métodos que se ejecutan
          en diferentes etapas del ciclo de vida de un componente, como montaje,
          actualización y desmontaje. Esto permite realizar acciones específicas
          en momentos específicos.
        </li>
      </ol>
    </section>
  );
};

export default Informacion;
