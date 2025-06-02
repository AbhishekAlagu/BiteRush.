import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./shimmer.js";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  // state variable - Your original comments maintained
  const [resLists, setresLists] = useState([]); // original list
  const [filteredres, setfilteredres] = useState([]); //filtered list
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0023069&lng=77.5318463&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Added null checks and default empty array to prevent errors
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setresLists(restaurants);
    setfilteredres(restaurants);
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus == false)
    return (
      <h1>
        Looks like you're Offline !! please check your internet connection
      </h1>
    );
  // conditiona rendering - Your original typo in comment preserved

  return !resLists || resLists.length === 0 ? (
    <div>
      <div className="shimmer-button"></div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="flex justify-between">
        <div className=" m-4 p-8">
          <input
            type="text"
            className=" px-8 py-0.5 border border-solid border-black rounded"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            // Added Enter key support while keeping your existing code
            onKeyDown={(e) =>
              e.key === "Enter" &&
              setfilteredres(
                resLists.filter((res) =>
                  res.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              )
            }
          />

          <button
            className="px-4 py-2 bg-emerald-300 m-2 rounded-lg"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searhtext - Your original typo in comment preserved
              console.log(searchText);
              // Made search case-insensitive while keeping your logic
              const filteredRestaurant = resLists.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredres(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-8">
          <button
            className="bg-emerald-300 px-8 py-2 content-center rounded-lg"
            onClick={() => {
              const filteredList = resLists.filter(
                (res) => res.info?.avgRating > 4
              );
              setfilteredres(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap mx-5">
        {/* Added empty state message while preserving your mapping logic */}
        {filteredres.length === 0 ? (
          <h1>No restaurants match your search</h1>
        ) : (
          filteredres.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard
                resData={restaurant}
                //keys should be used no matter what !(***note :if u dont have any unique key then u can use index no pronlem)
                // Your original comment preserved exactly as written
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
