import { useEffect, useState } from "react";
import { resObj } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantAPI } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]
  );

  const [FilteredRestaurants, setFilteredRestaurants] = useState([]
  );

  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch( restaurantAPI );
    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };

//  use ternary operator for conditional rendering
//   if(ListOfRestaurants.length == 0)
//   {
//     return <Shimmer/>
//   }

  return (ListOfRestaurants.length == 0)? <Shimmer/> : (
    <div id="body" className="body">
        <div>
        <input className="searchText" value={SearchText} onChange={
            (e)=>{
                setSearchText(e.target.value);
            }
        }/>
        <button className="searchBtn" onClick={()=>{
                const filteredData = ListOfRestaurants.filter(
                    (restaurant) => restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase())
                );
                setFilteredRestaurants(filteredData);
        }
        }>Search</button>
        </div>
      <div className="filter-container">
        Filters:
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = ListOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setFilteredRestaurants(filteredData);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="restaurantcard-container">
        {FilteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} className="link-restro-card">
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
