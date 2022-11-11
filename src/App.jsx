import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Divider/>
    </div>
  );
}

export default App;