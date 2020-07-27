import React from "react";
import "./App.css";
import "./tailwind.output.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Cart />
      <Footer />
    </React.Fragment>
  );
}

export default App;
