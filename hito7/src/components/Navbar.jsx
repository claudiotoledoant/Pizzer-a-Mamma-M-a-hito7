import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">Pizzería Mamma Mía!</Link>
      <div className="d-flex gap-2 ms-auto">
        <Link to="/" className="btn btn-outline-light btn-sm">🍕 Home</Link>
        
        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light btn-sm">🔓 Profile</Link>
            <button onClick={logout} className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
            <Link to="/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
          </>
        )}

        <Link to="/cart" className="btn btn-outline-info btn-sm">🛒 Total: $25.000</Link>
      </div>
    </nav>
  );
};

export default Navbar;