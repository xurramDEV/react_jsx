import React from "react";
import { Link } from "react-router-dom";
 
const about = () => {
  return (
    <section className="restaurants">
      <h2>Choose Your Favorite Restaurant</h2>
      
      <div className="restaurant-list">
        <div className="restaurant-card">
          <img src="/assets/rest1.png" alt="Restaurant 1" />
          <p>Restaurant 1</p>
          <Link to="/restaurant/1">
            <button>Select</button>
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

export default about;
