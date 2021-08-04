import React from "react";
import Stock from "./Stock";

function StockContainer({ stockData, portfolio, setPortfolio, techArray }) {

  function handleCardClick(id) {
    setPortfolio(portfolio);
     stockData.map(stock => {
      if(stock.id === id) {
       setPortfolio([...portfolio, stock])
       console.log(portfolio);

      }else{

        return portfolio;
      }
     
    })
  }
  const displayStocks = techArray.map(stock => (
    <Stock key={stock.id} id={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} onCardClick={handleCardClick} /> 
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
