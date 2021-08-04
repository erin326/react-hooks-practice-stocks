import React from "react";

function Stock({id, name, price, ticker, onCardClick, onPortfolioClick, portfolio}) {




  return (
    <div>
      <div onClick={portfolio ? () => onPortfolioClick(id) : () => onCardClick(id)} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
