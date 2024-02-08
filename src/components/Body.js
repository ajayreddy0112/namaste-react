import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let listOfRestaurantsJS = [
    {
      info: {
        id: "24494",
        name: "Domino's Pizza",
        cloudinaryImageId: "gmuwqh350lpajogp50lw",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        sla: {
          slaString: "30 mins",
        },
      },
    },
    {
      info: {
        id: "24495",
        name: "KFC",
        cloudinaryImageId: "gmuwqh350lpajogp50lw",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 3.9,
        sla: {
          slaString: "30 mins",
        },
      },
    },
    {
      info: {
        id: "24496",
        name: "MCD",
        cloudinaryImageId: "gmuwqh350lpajogp50lw",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        sla: {
          slaString: "30 mins",
        },
      },
    },
  ];

  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
