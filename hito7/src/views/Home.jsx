import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error al cargar pizzas:", err));
  }, []);

  // Filtrar las pizzas cuyo nombre incluya lo que escribe el usuario
  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">Nuestras Pizzas</h2>

      {/* Input de Búsqueda */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control form-control-lg text-center"
            placeholder="🔍 Buscar pizza por nombre (ej. Pepperoni, Napolitana)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Listado Filtrado */}
      <div className="row g-4 justify-content-center">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <div key={pizza.id} className="col-auto">
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-muted fs-5 mt-4">
            No se encontraron pizzas que coincidan con tu búsqueda. 🍕
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;