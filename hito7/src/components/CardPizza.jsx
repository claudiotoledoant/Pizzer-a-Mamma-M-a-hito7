import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  return (
    <div className="card h-100" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-capitalize">{name}</h5>
        <hr />
        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          {ingredients?.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
          ))}
        </ul>
        <hr />
        <p className="fs-5 fw-bold text-center">${price?.toLocaleString("es-CL")}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/pizza/${id}`} className="btn btn-dark btn-sm">Ver Más 👀</Link>
          <button className="btn btn-primary btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;