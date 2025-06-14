import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const Itemlist = ({ items, handleremove }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={`${item.card.info.id}-${index}`}
          className="p-4 m-2 border-b border-gray-200 text-left flex flex-col md:flex-row justify-between gap-4"
        >
          {/* Left Section: Name, Price, Description */}
          <div className="md:w-9/12 w-full">
            <div className="pb-2 font-semibold text-base">
              <span>{item.card.info.name}</span>
              <span className="text-sm text-gray-600">
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          {/* Right Section: Image + Buttons */}
          <div className="md:w-3/12 w-full flex md:flex-col flex-row-reverse items-center justify-between md:items-end">
            <img
              src={
                item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : "https://via.placeholder.com/96"
              }
              alt={item.card.info.name}
              className="w-24 h-24 object-cover rounded-lg shadow-sm mb-2 md:mb-3"
            />

            {/* Add and Remove buttons conditionally rendered */}
            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>

              {handleremove && (
                <button
                  className="px-3 py-1 mr-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  onClick={() => handleremove(item)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
