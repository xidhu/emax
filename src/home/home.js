import React from "react";
import Navbar from "./navbar";
import Carousal from "./carousal";
import ItemList from "./itemlist";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Carousal />
      <ItemList />
    </div>
  );
}

export default Home;
