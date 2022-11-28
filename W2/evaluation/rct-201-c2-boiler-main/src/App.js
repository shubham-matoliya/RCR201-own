import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
import CartItems from "./pages/CartItems";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path=""
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route
          path="/cartItem"
          element={
            <RequiredAuth>
              <CartItems />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
