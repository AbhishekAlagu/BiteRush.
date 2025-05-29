import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./shimmer.js";
import { useEffect, useState } from "react";

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
  // conditiona rendering - Your original typo in comment preserved

  return !resLists || resLists.length === 0 ? (
    <div>
      <div className="shimmer-button"></div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
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
            className="s-btn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
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
