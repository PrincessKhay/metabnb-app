import React from "react";
import Hero from "./Hero";
import Divider from "./Divider";
import Collection from "./Collection";
import Moreinfo from "./Moreinfo";

function Home() {
  return (
    <div>
      <Hero />
      <Divider />
      <Collection />
      <Moreinfo />
    </div>
  );
}

export default Home;
