import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { token } = useContext(UserContext);

  return (
    <div className="container mt-5 text-center">
      <h2>🛒 Carrito de Compras</h2>
      <p className="mt-3">Total a pagar: $25.000</p>
      
      <button 
        className="btn btn-success" 
        disabled={!token}
      >
        Pagar
      </button>

      {!token && (
        <p className="text-danger mt-2">Debes iniciar sesión para realizar la compra.</p>
      )}
    </div>
  );
};

export default Cart;