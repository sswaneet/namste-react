import { useEffect, useState } from "react"
import { menuAPI } from "./constants";

const useRestaurantMenu = (resId) => {

    const [restaurantInfo,setRestaurantInfo]= useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(menuAPI+resId);
        const jsonData = await data.json();
        setRestaurantInfo(jsonData.data);
    } 

    return restaurantInfo;
}

export default useRestaurantMenu;