import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menuAPI } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(menuAPI + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantInfo(jsonData.data);
  };

  if (restaurantInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {
        <div>
          {itemCards?.map((item) => (
            // <div className="menu-item">
                <div className="menu-item" key={item.card.info.id}>
                    <h3> {item.card.info.name}</h3>
                    <h5>{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h5>
                    <p>{item.card.info.description}</p>
                    <div className="divider-line"/>
                </div>
            // </div>
          ))}
        </div>
      }
    </div>
  );
};

export default RestaurantMenu;
