import { IoIosArrowDown } from "react-icons/io";
import Itemlist from "./Itemlist";
import { useState } from "react";

const RestaurantCategory = ({ category, showItems, setshowIndex }) => {
  const [show, setshow] = useState(false);
  const handleClick = () => {
    setshowIndex();
    show ? setshow(false) : setshow(true);
  };
  return (
    <div className="text-center">
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {category?.title} ({category?.itemCards?.length}){" "}
          </span>

          <span>
            <IoIosArrowDown />
          </span>
        </div>
        {showItems && show && <Itemlist items={category?.itemCards} />}
      </div>

      {/* Accordian data */}
    </div>
  );
};

export default RestaurantCategory;
