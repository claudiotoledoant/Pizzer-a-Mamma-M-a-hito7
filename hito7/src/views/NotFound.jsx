import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>404 - Página no encontrada</h1>
      <p>La ruta a la que intentas acceder no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al Home</Link>
    </div>
  );
};

export default NotFound;