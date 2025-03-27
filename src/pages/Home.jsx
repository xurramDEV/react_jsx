// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import food from "../assets/food img.png"
const Home = () => {
  return (
    <div>
      <Header />
      <div className="banner">
      <div className="banner-content">
      <h2>Grab Big Deals
on <span className="highlight">Yummy Meals!</span> </h2>
      <p>Lorem ipsum dolor sit amet consectetur. Aenean mau
risnam tortor curabitur phasellus. </p>
<button className="button">Get Started</button>
      </div>
      </div>
      <div className="banner-right">
    
      </div>
    </div>

  );
};

export default Home;
