import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al obtener la pizza:", err));
  }, [id]);

  if (!pizza) return <p className="text-center mt-5 fs-4">Cargando detalles de la pizza...</p>;

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card mb-3 shadow" style={{ maxWidth: "600px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img src={pizza.img} className="img-fluid rounded-start h-100 object-fit-cover" alt={pizza.name} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title text-capitalize">{pizza.name}</h3>
              <p className="card-text">{pizza.desc}</p>
              <p className="fw-bold mb-1">Ingredientes:</p>
              <ul>
                {pizza.ingredients?.map((ing, index) => (
                  <li key={index}>🍕 {ing}</li>
                ))}
              </ul>
              <h4 className="mt-3 text-primary">${pizza.price?.toLocaleString("es-CL")}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;