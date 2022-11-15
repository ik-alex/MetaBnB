import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
import "./styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Footer />
  </React.StrictMode>
);
