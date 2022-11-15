import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footers from "./Footers";
// import Wallet from "./Wallet";
import Place from "./Place";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Place />
      <Footers />
      {/* <Wallet /> */}
    </>
  );
};

export default App;
