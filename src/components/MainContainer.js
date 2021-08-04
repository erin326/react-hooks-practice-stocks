import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import Stock from "./Stock";

function MainContainer() {

  const [stockData, setStockData] = useState([]);
 
  const [portfolio, setPortfolio] = useState([]);

  const [checked, setChecked] = useState(false);

  const [category, setCategory] = useState('Tech');

  
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(data => setStockData(data))
  }, [])


  function handleAlphabetSort() {
    const alphabetizedArray = stockData.slice().sort(function(a, b) {
    return ( a.name > b.name) ? 1 : (a.name === b.name) ? ((a.ticker > b.ticker) ? 1 : -1) : -1
    });
    setChecked(checked => !checked)
    setStockData(alphabetizedArray);
    console.log(stockData)
    
  }

  function handlePriceSort() {
    const priceSortedArray = stockData.slice().sort(function(a, b) {
      return (a.price > b.price) ? 1 : -1
    })
    setChecked(checked => !checked)
    setStockData(priceSortedArray)
  }
   const techArray = stockData.filter(stock =>  stock.type === category);

  return (
    <div>
      <SearchBar 
      setCategory={setCategory}
      onPriceSort={handlePriceSort} 
      checked={checked} 
      onAlphabetChange={handleAlphabetSort}
       />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          techArray={techArray}
          portfolio={portfolio} 
          setPortfolio={setPortfolio} 
          stockData={stockData} 
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
           stockData={stockData}
            portfolio={portfolio} 
            setPortfolio={setPortfolio}
            />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
