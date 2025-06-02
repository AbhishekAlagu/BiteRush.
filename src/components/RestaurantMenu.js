import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [bestseller, setBestseller] = useState([]);
  const [showbestseller, setshowbestseller] = useState(false);
  const { resId } = useParams();

  const { resInfo, itemCards } = useRestaurantMenu(resId);
  const info = resInfo?.cards?.[2]?.card?.card?.info;

  if (!info || itemCards.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = info;

  const handleBestsellers = () => {
    if (!showbestseller) {
      const filtered = itemCards.filter(
        (item) => item?.card?.info?.isBestseller
      );
      setBestseller(filtered);
    } else {
      setBestseller([]);
    }
    setshowbestseller(!showbestseller);
  };

  return (
    <div className="menu">
      <h1 className=" text-5xl font-bold text-center m-2">{name}</h1>
      <h4 className=" text-3xl font-medium text-center mb-2 ">
        {cuisines?.join(", ")}
      </h4>
      <div className="border-b-2 border-amber-400 "></div>
      <div className=" py-4 px-2 m-4 bg-emerald-200 rounded-4xl text-center hover:bg-blue-200">
        <button
          className=" text-2xl text-amber-700 font-semibold cursor-pointer"
          onClick={handleBestsellers}
        >
          {showbestseller ? "hide bestseller" : "show bestseller"}
        </button>
        {bestseller.length > 0 && (
          <div>
            <h2 className="m-4 text-white font-medium text-4xl cursor-pointer">
              🔥 BEST SELLERS
            </h2>
            <ul>
              {bestseller.map((item, index) => {
                const info = item.card?.info;
                return (
                  <li className="font-bold" key={`${info?.id}-${index}`}>
                    {info?.name} - ₹
                    {info?.price / 100 || info?.defaultPrice / 100}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <h2 className="text-4xl text-amber-500 text-center">Menu</h2>
      <ul className="text-center bg-blue-200 m-4 rounded-2xl p-2 hover:bg-indigo-200">
        {itemCards.map((item, index) => {
          const info = item.card?.info;
          return (
            <li className="m-1 font-bold" key={`${info?.id}-${index}`}>
              {info?.name} - ₹{info?.price / 100 || info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
