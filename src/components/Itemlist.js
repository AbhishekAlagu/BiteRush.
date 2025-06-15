import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const Itemlist = ({ items, showAddButton = true, handleremove }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  // Get quantity from cart for the item
  const getQuantity = (itemId) => {
    const found = cartItems.find((entry) => entry.item.card.info.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <div>
      {items.map((item, index) => {
        const itemId = item.card.info.id;
        const quantity = getQuantity(itemId);

        return (
          <div
            key={`${itemId}-${index}`}
            className="p-4 m-2 border-b border-gray-200 text-left flex flex-col md:flex-row justify-between gap-4"
          >
            {/* Left Section */}
            <div className="md:w-9/12 w-full">
              <div className="pb-2 font-semibold text-base">
                <span>{item.card.info.name}</span>
                <span className="text-sm text-gray-600">
                  {" "}
                  - ₹
                  {(item.card.info.price
                    ? item.card.info.price
                    : item.card.info.defaultPrice) / 100}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                {item.card.info.description}
              </p>
            </div>

            {/* Right Section */}
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

              {/* Buttons */}
              <div className="flex gap-2 items-center">
                {handleremove ? (
                  // Cart view: show quantity controls
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
                      onClick={() => handleRemoveItem(item)}
                    >
                      -
                    </button>
                    <span className="font-medium">{quantity}</span>
                    <button
                      className="bg-green-500 text-white px-2 rounded hover:bg-green-600"
                      onClick={() => handleAddItem(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  // Restaurant menu view: just "Add" button
                  showAddButton && (
                    <button
                      className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                      onClick={() => handleAddItem(item)}
                    >
                      Add
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Itemlist;
