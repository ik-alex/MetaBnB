import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footers from "./Footers";
// import Wallet from "./Wallet";
import Place from "./Place";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/place" element={<Place />} />
        </Routes>
        <Footers />
      </Router>
    </>
  );
};

export default App;
