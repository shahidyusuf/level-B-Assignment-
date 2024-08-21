import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create";
import UpDate from "./components/UpDate";
import Home from "./pages/Home";
import Read from "./pages/Read";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<UpDate />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// https://www.youtube.com/watch?v=SYv61aPSiOo
