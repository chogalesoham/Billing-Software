import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AppProducts from "./all-products";
import Header from "./compontes/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-produt" element={<AppProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
