import React from "react";
import logo from "../../components/img/logo/logo-black.png";
import "../styles/forgot.css";
import { Link } from "react-router-dom";

export default function Forgot() {
  const handleRedirectHome = () => {};
  return (
    <div className="forgot-container">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-light text-white card-forgot">
              <div className="card-body p-5 text-center">
                <div className="md-4">
                  <Link to="/" onClick={handleRedirectHome}>
                    <img
                      src={logo}
                      role="button"
                      className="img-fluid w-25 p-2 mb-2"
                      alt="Voltar para a página inicial"
                    />
                  </Link>
                  <h2 className="text-black fs-5 mb-3">Esqueceu sua senha?</h2>
                  <form id="form-email">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Digite seu E-mail"
                      required
                    />
                    <input
                      className="btn btn-outline-dark btn-lg px-5 cadastro-btn mt-2 mb-2"
                      type="submit"
                      value="Enviar"
                      id="submit"
                    />
                  </form>
                </div>

                <div>
                  <p className="mb-0 text-black">
                    Não tem uma conta?
                    <Link
                      to="/cadastro"
                      className="links-register fs-6 text-decoration-none fw-bold"
                    >
                      Cadastre-se
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="mb-0 text-black">
                    Já possui uma conta?
                    <Link
                      to="/login"
                      className="links-register fs-6 text-decoration-none fw-bold"
                    >
                      Entre
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
