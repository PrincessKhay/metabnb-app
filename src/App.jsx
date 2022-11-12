import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Collection from "./components/Collection";
import Moreinfo from "./components/Moreinfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Divider/>
    <Collection />
    <Moreinfo/>
    <Footer/>
    </div>
  );
}

export default App;