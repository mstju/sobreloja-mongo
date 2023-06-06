import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo/logo.png";
import "../styles/style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img
          src={logo}
          className="logo navbar-brand"
          alt="Voltar para a página inicial"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span>
            <i className="bi bi-list white-icon"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0" id="navbar-items">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                início
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Buscar Loja
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                para proprietários
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                para imobiliárias
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <i className="bi bi-box-arrow-in-right"></i> entrar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
