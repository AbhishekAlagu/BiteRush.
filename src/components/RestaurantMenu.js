import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, itemCards } = useRestaurantMenu(resId);
  const info = resInfo?.cards?.[2]?.card?.card?.info;

  if (!info || itemCards.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = info;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <h1 className=" text-xl font-bold text-center my-4">{name}</h1>
      <h4 className=" text-lg font-bold text-center mb-2 ">
        {cuisines?.join(", ")}
      </h4>

      {categories.map((category, index) => (
        <RestaurantCategory key={index} category={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
