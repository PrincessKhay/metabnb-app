import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Collection from "./components/Collection";

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Divider/>
    <Collection />
    </div>
  );
}

export default App;