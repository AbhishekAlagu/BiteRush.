import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [bestseller, setbestseller] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  const info = resInfo?.cards?.[2]?.card?.card?.info;

  // Extract all itemCards from REGULAR section
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((c) => c.card?.card?.itemCards)
      ?.flatMap((c) => c.card.card.itemCards) || [];

  if (!info || itemCards.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{cuisines?.join(", ")}</h4>
      <div>
        <button
          onClick={() => {
            const BestsellerMenu = itemCards.filter(
              (res) => res?.card?.info?.isBestseller == true
            );
            setbestseller(BestsellerMenu);
          }}
        >
          Show Bestsellers
        </button>
        {bestseller.length > 0 && (
          <div>
            <h2> 🔥 BEST SELLERS</h2>
            <ul>
              {bestseller.map((item, index) => {
                const itemInfo = item.card?.info;
                return (
                  <li key={`${itemInfo?.id}-${index}`}>
                    {itemInfo?.name}- ₹
                    {itemInfo?.price / 100 || itemInfo?.defaultprice / 100}
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
          const itemInfo = item.card?.info;
          return (
            <li key={`${itemInfo?.id}-${index}`}>
              {itemInfo?.name} - ₹
              {itemInfo?.price / 100 || itemInfo?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
