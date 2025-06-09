import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
      } catch (err) {
        console.error("Failed to fetch menu:", err);
      }
    };

    if (resId) fetchMenu();
  }, [resId]);

  // Extract itemCards
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((c) => c.card?.card?.itemCards)
      ?.flatMap((c) => c.card.card.itemCards) || [];

  console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  return { resInfo, itemCards };
};

export default useRestaurantMenu;
