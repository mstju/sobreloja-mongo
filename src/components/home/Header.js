import React, { useState } from "react";
import mainPhoto from "../img/index/main.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [valor, setValor] = useState("");
  const [tamanho, setTamanho] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      tipo,
      estado,
      valor,
      tamanho,
    });

    navigate(`/resultados?${queryParams}`);
  };

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
  };

  const handleValorChange = (e) => {
    const selectedValue = e.target.value;
    setValor(selectedValue);
  };

  const handleTamanhoChange = (e) => {
    const selectedValue = e.target.value;
    setTamanho(selectedValue);
  };

  return (
    <div className="header-content">
      <div className="left">
        <h1 className="form-title">Encontre a loja dos seus sonhos!</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="tipo">Tipo:</label>
          <select name="tipo" onChange={handleTipoChange}>
            <option value="">Todos</option>
            <option value="loja">Loja</option>
            <option value="quiosque">Quiosque</option>
            <option value="restaurante">Restaurante</option>
            <option value="box">Box</option>
          </select>

          <label htmlFor="estado">Estado:</label>
          <select
            name="estado"
            id="estado"
            value={estado}
            onChange={handleEstadoChange}
          >
            <option value="">Todos</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="São Paulo">São Paulo</option>
          </select>
          <label htmlFor="valor">Valor:</label>
          <select
            name="valor"
            id="valor"
            value={valor}
            onChange={handleValorChange}
          >
            <option value="">Todos</option>
            <option value="ate8000">Até R$8.000/mês</option>
            <option value="8000a15000">De R$8.000 a R$15.000/mês</option>
            <option value="acima15000">Acima de R$15.000/mês</option>
          </select>
          <label htmlFor="tamanho">Tamanho:</label>
          <select
            name="tamanho"
            id="tamanho"
            value={tamanho}
            onChange={handleTamanhoChange}
          >
            <option value="">Todos</option>
            <option value="ate50">Até 50m²</option>
            <option value="50a100">De 50m² a 100m²</option>
            <option value="100a200">De 100m² a 200m²</option>
          </select>
          <button type="submit" style={{ marginBottom: "10px" }}>
            Filtrar
          </button>
        </form>
      </div>
      <div className="right">
        <img
          src={mainPhoto}
          alt="Mulher sorrindo, segurando sacolas cheias de compras"
          className="header-img"
        />
      </div>
    </div>
  );
};

export default Header;
