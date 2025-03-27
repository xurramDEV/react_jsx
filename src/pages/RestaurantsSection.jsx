import React from "react";
import { Link } from "react-router-dom";
import sofram from "../assets/sofram.webp"; // Rasmni import qilish
const RestaurantsSection = () => {
  return (
    <section className="restaurants">
      <h2>Choose Your Favorite Restaurant</h2>
      
      <div className="restaurant-list">
        <div className="restaurant-card">
       
          <p>Restaurant 1</p>
          <Link to="/">
          <img src={sofram} alt="sofram" />
        </Link>
        </div>

        <div className="restaurant-card">
          <img src="/assets/rest2.png" alt="Restaurant 2" />
          <p>Restaurant 2</p>
          <Link to="/restaurant/2">
            <button>Select</button>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default RestaurantsSection;
