import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="about mt-4">
        <h3 className="text-white fs-5">Sobre Nós</h3>
        <ul>
          <li>
            <a href="#">Conheça o SobreLoja</a>
          </li>
          <li>
            <a href="#">Regiões Atendidas</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="/privacidade" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </a>
          </li>
        </ul>
      </section>

      <section className="social-media mt-4">
        <h3 className="text-white fs-5">Contato</h3>
        <ul className="wrapper">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <span>
              <i className="bi bi-facebook"></i>
            </span>
          </li>
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <span>
              <i className="bi bi-twitter"></i>
            </span>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span>
              <i className="bi bi-instagram"></i>
            </span>
          </li>
          <li className="icon linkedin">
            <span className="tooltip">Linkedin</span>
            <span>
              <i className="bi bi-linkedin"></i>
            </span>
          </li>
          <li className="icon whatsapp">
            <span className="tooltip">WhatsApp</span>
            <span>
              <i className="bi bi-whatsapp"></i>
            </span>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
