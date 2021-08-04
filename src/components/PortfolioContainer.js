import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, setPortfolio}) {

  function handlePortfolioClick(id) {
    const updatedPortfolio = portfolio.filter(obj => obj.id !== id)
    
    setPortfolio(updatedPortfolio)
    console.log(portfolio)
  }

  return (
    <div>
      <h2>My Portfolio</h2>
     {portfolio.map(obj => (
       <Stock key={obj.name} name={obj.name} ticker={obj.ticker} price={obj.price} id={obj.id} onPortfolioClick={() => handlePortfolioClick(obj.id)} portfolio={portfolio}/> 
     ))}
    </div>
  );
}

export default PortfolioContainer;
