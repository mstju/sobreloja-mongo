import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/resultados.css";
import Footer from "../home/Footer";
import Navbar from "../home/Nav";

export default function Resultados() {
  const cardsData = [
    {
      imgSrc: require("../img/cards/acbrazil.jpeg"),
      title: "AC Brazil",
      estado: "São Paulo",
      tipo: "loja",
      descricao: "Loja de shopping. 80m²",
      valor: "R$ 15.000/mês",
      preco: "15000",
      tamanho: "80",
    },
    {
      imgSrc: require("../img/cards/acium.jpg"),
      title: "Acium",
      estado: "São Paulo",
      tipo: "quiosque",
      descricao: "Quiosque. 10m²",
      valor: "R$ 4.000/mês",
      preco: "4000",
      tamanho: "10",
    },
    {
      imgSrc: require("../img/cards/baciodilatte.jpg"),
      title: "Bacio di Latte",
      estado: "Rio de Janeiro",
      tipo: "restaurante",
      descricao: "Restaurante. 50m²",
      valor: "R$ 12.000/mês",
      preco: "12000",
      tamanho: "50",
    },
    {
      imgSrc: require("../img/cards/boticario.jpg"),
      title: "O Boticário",
      estado: "Rio de Janeiro",
      tipo: "quiosque",
      descricao: "Quiosque. 15m²",
      valor: "R$ 6.000/mês",
      preco: "6000",
      tamanho: "15",
    },
    {
      imgSrc: require("../img/cards/botoclinic.jpg"),
      title: "Botoclinic",
      estado: "Rio de Janeiro",
      tipo: "loja",
      descricao: "Loja de shopping. 150m²",
      valor: "R$ 20.000/mês",
      preco: "20000",
      tamanho: "150",
    },
    {
      imgSrc: require("../img/cards/brasilcacau.jpg"),
      title: "Chocolates Brasil Cacau",
      estado: "São Paulo",
      tipo: "quiosque",
      descricao: "Quiosque. 12m²",
      valor: "R$ 6.000/mês",
      preco: "6000",
      tamanho: "12",
    },
    {
      imgSrc: require("../img/cards/cabana.png"),
      title: "Cabana Burger",
      estado: "São Paulo",
      tipo: "restaurante",
      descricao: "Restaurante. 70m²",
      valor: "R$ 16.000/mês",
      preco: "16000",
      tamanho: "70",
    },
    {
      imgSrc: require("../img/cards/cantao.jpg"),
      title: "Cantao",
      estado: "Rio de Janeiro",
      tipo: "loja",
      descricao: "Loja de shopping. 65m²",
      valor: "R$ 14.000/mês",
      preco: "14000",
      tamanho: "65",
    },
    {
      imgSrc: require("../img/cards/chillibeans.jpg"),
      title: "Chilli Beans",
      estado: "São Paulo",
      tipo: "quiosque",
      descricao: "Quiosque. 18m²",
      valor: "R$ 7.000/mês",
      preco: "7000",
      tamanho: "18",
    },
    {
      imgSrc: require("../img/cards/gendai.jpg"),
      title: "Gendai",
      estado: "São Paulo",
      tipo: "restaurante",
      descricao: "Restaurante. 160m²",
      valor: "R$ 18.000/mês",
      preco: "18000",
      tamanho: "160",
    },
    {
      imgSrc: require("../img/cards/kfc.jpg"),
      title: "KFC",
      estado: "São Paulo",
      descricao: "Restaurante. 55m²",
      tipo: "restaurante",
      valor: "R$ 11.000/mês",
      preco: "11000",
      tamanho: "55",
    },
    {
      imgSrc: require("../img/cards/mammajamma.webp"),
      title: "Mamma Jamma",
      estado: "Rio de Janeiro",
      descricao: "Restaurante. 180m²",
      tipo: "restaurante",
      valor: "R$ 19.000/mês",
      preco: "19000",
      tamanho: "180",
    },
    {
      imgSrc: require("../img/cards/oakberry.jpg"),
      title: "Oakberry",
      estado: "Rio de Janeiro",
      descricao: "Quiosque. 14m²",
      tipo: "quiosque",
      valor: "R$ 6.000/mês",
      preco: "6000",
      tamanho: "14",
    },
    {
      imgSrc: require("../img/cards/peahi.jpg"),
      title: "Peahi",
      estado: "São Paulo",
      tipo: "loja",
      descricao: "Loja de Shopping. 100m²",
      valor: "R$ 13.000/mês",
      preco: "13000",
      tamanho: "100",
    },
    {
      imgSrc: require("../img/cards/polishop.jpg"),
      title: "Polishop",
      estado: "São Paulo",
      descricao: "Quiosque. 14m²",
      tipo: "quiosque",
      valor: "R$ 8.000/mês",
      preco: "8000",
      tamanho: "14",
    },
    {
      imgSrc: require("../img/cards/rommanel.jpg"),
      title: "Rommanel",
      estado: "São Paulo",
      tipo: "loja",
      descricao: "Loja de Shopping. 70m²",
      valor: "R$ 13.000/mês",
      preco: "13000",
      tamanho: "70",
    },
    {
      imgSrc: require("../img/cards/starbucks.jpg"),
      title: "Starbucks",
      estado: "Rio de Janeiro",
      tipo: "restaurante",
      descricao: "Restaurante. 120m²",
      valor: "R$ 27.000/mês",
      preco: "27000",
      tamanho: "120",
    },
    {
      imgSrc: require("../img/cards/thecoffee.jpg"),
      title: "The Coffee",
      estado: "São Paulo",
      tipo: "box",
      descricao: "Box. 10m²",
      valor: "R$ 3.000/mês",
      preco: "3000",
      tamanho: "10",
    },
    {
      imgSrc: require("../img/cards/tokstok.jpg"),
      title: "Tok Stok",
      estado: "São Paulo",
      tipo: "loja",
      descricao: "Loja de Shopping. 250m²",
      valor: "R$ 45.000/mês",
      preco: "45000",
      tamanho: "250",
    },
    {
      imgSrc: require("../img/cards/propet.jpg"),
      title: "ProPet",
      estado: "Rio de Janeiro",
      tipo: "box",
      descricao: "Box. 12m²",
      valor: "R$ 5.000/mês",
      preco: "5000",
      tamanho: "12",
    },
    {
      imgSrc: require("../img/cards/uza.jpg"),
      title: "Uza",
      estado: "São Paulo",
      tipo: "loja",
      descricao: "Loja de Shopping. 70m²",
      valor: "R$ 10.000/mês",
      preco: "10000",
      tamanho: "70",
    },
  ];

  const [filteredCards, setFilteredCards] = useState(cardsData);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tipo = params.get("tipo");
    const estado = params.get("estado");
    const valor = params.get("valor");
    const tamanho = params.get("tamanho");

    let filteredResult = cardsData;

    if (tipo) {
      filteredResult = filteredResult.filter((card) => card.tipo === tipo);
    }

    if (estado) {
      filteredResult = filteredResult.filter((card) => card.estado === estado);
    }

    if (valor) {
      filteredResult = filteredResult.filter((card) => {
        const cardValor = parseInt(card.preco, 10);

        if (valor === "ate8000" && cardValor <= 8000) {
          return true;
        }

        if (valor === "8000a15000" && cardValor > 8000 && cardValor <= 15000) {
          return true;
        }

        if (valor === "acima15000" && cardValor > 15000) {
          return true;
        }

        return false;
      });
    }

    if (tamanho) {
      filteredResult = filteredResult.filter((card) => {
        const cardTamanho = parseInt(card.tamanho, 10);

        if (tamanho === "ate50" && cardTamanho <= 50) {
          return true;
        }

        if (tamanho === "50a100" && cardTamanho > 50 && cardTamanho <= 100) {
          return true;
        }

        if (tamanho === "100a200" && cardTamanho > 100 && cardTamanho <= 200) {
          return true;
        }

        return false;
      });
    }

    setFilteredCards(filteredResult);
  }, [location.search]);

  return (
    <div>
      <Navbar />
      <main className="results-main">
        <h1 className="results-title">Encontre a loja dos seus sonhos!</h1>
        <div className="container">
          <div className="row">
            <div className="container-cards">
              <div className="row" id="cards">
                {filteredCards.map((card, index) => (
                  <div
                    key={index}
                    className="col-md-4 card-group"
                    data-tipo={card.tipo}
                    data-estado={card.estado}
                    data-valor={card.valor}
                    data-tamanho={card.tamanho}
                  >
                    <div className="card">
                      <img
                        src={card.imgSrc}
                        className="card-img-results"
                        alt={card.title}
                      />
                      <div className="card-bdy">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">
                          <small className="text-muted">{card.estado}</small>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">{card.descricao}</small>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">{card.valor}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
