import { IoIosArrowDown } from "react-icons/io";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ category }) => {
  return (
    <div className="text-center">
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {category?.title} ({category?.itemCards?.length}){" "}
          </span>

          <span>
            <IoIosArrowDown />
          </span>
        </div>
        <Itemlist items={category?.itemCards} />
      </div>

      {/* Accordian data */}
    </div>
  );
};

export default RestaurantCategory;
