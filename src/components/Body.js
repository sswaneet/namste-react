import { useEffect, useState } from "react";
import { resObj } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9075059&lng=77.6085986&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
