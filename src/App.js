import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/home/Nav";
import Header from "./components/home/Header";
import HeaderTitle from "./components/home/HeaderTitle";
import ImoveisArea from "./components/home/ImoveisArea";
import Footer from "./components/home/Footer";
import Privacidade from "./components/pages/Privacidade";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Forgot from "./components/pages/Forgot";
import Resultados from "./components/pages/Resultados";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeaderTitle />
      <ImoveisArea />
      <Footer />
    </div>
  );
}

export default App;
