import React from "react";
import loja from "../img/index/loja.jpg";
import quiosque from "../img/index/quiosque.jpg";
import food from "../img/index/food.jpg";
import box from "../img/index/box.jpg";

const ImoveisArea = () => {
  return (
    <div id="area-imoveis">
      <div className="container-fluid cards-main">
        <div className="col-md-3">
          <div className="card-1 card md-3">
            <img
              className="img-fluid card-img-top"
              src={loja}
              alt="Manequins de uma loja de roupas"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-2 card">
            <img
              className="img-fluid card-img-top"
              src={quiosque}
              alt="Quiosque"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-3 card">
            <img
              className="img-fluid card-img-top"
              src={food}
              alt="Restaurante"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-4 card">
            <img className="img-fluid card-img-top" src={box} alt="Boxes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImoveisArea;
