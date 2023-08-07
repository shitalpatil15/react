import { useState, useEffect } from "react";
import { menuUrl, IMG_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [restaurant, setRestaurantData] = useState({});
    const restId = useParams();
    useEffect(() => {
        fetchData();
    }, []);

    console.log("restId", restId)
    const fetchData = async () => {
        const data = await fetch(menuUrl + restId.id);
        const json = await data.json();

        const result = json?.data?.cards[0]?.card?.card?.info;
        // console.log("###", json)


       
        // const result = json?.data?.cards[0]?.card?.card?.info;
        setRestaurantData(result);
    }


    return (
        <div className="bg-red-50 max-w-md mx-auto" >

            <div className="p-3">
                <img
                    className="rounded-lg"
                    src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                    alt={restaurant?.name} />

                <p className='font-bold my-2'>{restaurant?.name}</p>
                <span className='font-thin text-sm my-2'>• {restaurant?.cuisines?.join(", ")}</span>

                <p className="my-2">• {restaurant?.areaName}, {restaurant?.city}</p>

                <p className='flex flex-wrap justify-between my-2'>
                    <span>• {restaurant?.sla?.slaString}</span>
                    <span>• {restaurant?.costForTwoMessage}</span>
                </p>

                <p className='flex flex-wrap justify-between my-2'>
                    <span>• {restaurant?.isOpen ? "Open Now" : "Closed"}</span>
                    <span>{restaurant?.veg ? "🟢 Veg" : "🔴 Non-veg"}</span>
                </p>

                <p className='flex flex-wrap justify-between my-2'>

                    <span>• {restaurant?.totalRatingsString}</span>
                    <span className="bg-[#48c47]">⭐ {restaurant?.avgRating}</span>
                </p>
            </div>
        </div>
    );
}

export default RestaurantMenu;