import { cloudinaryURL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    return (
      <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
        <div>
          <div>
            {" "}
            <img
              className="restaurant-logo"
              src={
                cloudinaryURL +
                resData.info.cloudinaryImageId
              }
            />
          </div>
          <div>
            {" "}
            <h3>{resData.info.name}</h3>
          </div>
          <div>
            {" "}
            <h4>{resData.info.avgRating} stars</h4>
          </div>
          <div>
            {" "}
            <h4>{resData.info.cuisines.join(", ")}</h4>
          </div>
          <div>
            {" "}
            <h4>{resData.info.costForTwo}</h4>
          </div>
          <div>
            {" "}
            <h5>{resData.info.sla.deliveryTime} minutes</h5>
          </div>
        </div>
      </div>
    );
  };

  export default RestaurantCard;