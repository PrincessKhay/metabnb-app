import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Collection from "./components/Collection";
import Moreinfo from "./components/Moreinfo";

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Divider/>
    <Collection />
    <Moreinfo/>
    </div>
  );
}

export default App;