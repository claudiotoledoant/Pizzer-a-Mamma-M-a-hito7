import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Cart from "./views/Cart";
import Profile from "./views/Profile";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";

function App() {
  const { token } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        
        {/* Ruta protegida: si token es false, redirige a /login */}
        <Route 
          path="/profile" 
          element={token ? <Profile /> : <Navigate to="/login" />} 
        />

        {/* Si token es true, redirige Login y Register al Home */}
        <Route 
          path="/login" 
          element={!token ? <Login /> : <Navigate to="/" />} 
        />
        <Route 
          path="/register" 
          element={!token ? <Register /> : <Navigate to="/" />} 
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;