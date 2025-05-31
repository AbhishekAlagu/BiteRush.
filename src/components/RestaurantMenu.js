import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [bestseller, setBestseller] = useState([]);
  const { resId } = useParams();

  const { resInfo, itemCards } = useRestaurantMenu(resId);
  const info = resInfo?.cards?.[2]?.card?.card?.info;

  if (!info || itemCards.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = info;

  const handleBestsellers = () => {
    const filtered = itemCards.filter((item) => item?.card?.info?.isBestseller);
    setBestseller(filtered);
  };

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{cuisines?.join(", ")}</h4>
      <div>
        <button onClick={handleBestsellers}>Show Bestsellers</button>
        {bestseller.length > 0 && (
          <div>
            <h2>🔥 BEST SELLERS</h2>
            <ul>
              {bestseller.map((item, index) => {
                const info = item.card?.info;
                return (
                  <li key={`${info?.id}-${index}`}>
                    {info?.name} - ₹
                    {info?.price / 100 || info?.defaultPrice / 100}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => {
          const info = item.card?.info;
          return (
            <li key={`${info?.id}-${index}`}>
              {info?.name} - ₹{info?.price / 100 || info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
