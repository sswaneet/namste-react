import { useState } from "react";
import { resObj } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    
    const [ListOfRestaurants, setListOfRestaurants] = useState(resObj.restaurants);


    return (
      <div id="body" className="body">
        <div className="filter-container">
            Filter:
            <button className="filter-btn" onClick={()=>{
                const filteredData = ListOfRestaurants.filter(restaurant=>(restaurant.info.avgRating>=4.5));
                setListOfRestaurants(filteredData)
            }}>
             Top rated restaurants
            </button>
        </div>
        
        <div className="restaurantcard-container">
          {
          ListOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
  
          }
        </div>
      </div>
    );
  };

  export default Body;