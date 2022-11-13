import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Places from "./components/Places";
// import Wallet from "./components/Wallet";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<Places />} />
        {/* <Route path="/connect-wallet" element={<Wallet />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
