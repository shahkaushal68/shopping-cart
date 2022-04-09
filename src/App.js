import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row homepage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
