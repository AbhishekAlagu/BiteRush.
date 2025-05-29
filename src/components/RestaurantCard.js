const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt="restaurant"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating :{avgRating}</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
