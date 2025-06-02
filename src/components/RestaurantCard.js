import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
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
    </div>
  );
};

export default RestaurantCard;
