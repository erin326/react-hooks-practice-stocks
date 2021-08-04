import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;


/*
App
|__Header
|__MainContainer
  |__SearchBar
  |__PortfolioContainer
  |  |__Stock
  |__StockContainer
    |__Stock

*/