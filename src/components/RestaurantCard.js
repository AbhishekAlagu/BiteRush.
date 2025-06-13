import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import AnimatedContent from "./Animation";
//import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  //const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <AnimatedContent
      distance={70}
      direction="vertical"
      reverse={false}
      duration={1}
      ease="bounce.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <div className="res-card shadow-lg hover:bg-blue-100 m-2 p-4 w-[200px] h-auto bg-fuchsia-50  rounded-md">
        <img
          className="res-logo rounded-xl"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
        />

        <h3 className="font-bold text-lg py-1">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating :{avgRating}</h4>
        <h4> {costForTwo}</h4>
        <h4> {sla?.deliveryTime} mins</h4>
        {/*<h4> {loggedInUser}</h4>*/}
      </div>
    </AnimatedContent>
  );
};

export const withtoprated = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        {" "}
        {/* This makes the child label positionable */}
        <label className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded shadow-md z-10">
          ⭐ Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
