import Itemlist from "./Itemlist";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const getTotalAmount = () => {
    return cartItems.reduce((acc, entry) => {
      const price =
        entry.item.card.info.price || entry.item.card.info.defaultPrice || 0;
      return acc + (price / 100) * entry.quantity;
    }, 0);
  };

  return (
    <div className="p-6 text-center">
      <h2 className=" text-center text-xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">
          Your cart is empty,Add items to your Cart!!
        </p>
      ) : (
        <div className="w-10/12 md:w-6/12 m-auto">
          <Itemlist
            items={cartItems.map((entry) => entry.item)}
            handleremove={handleRemoveItem}
          />

          <div className="mt-4 text-right">
            <h3 className="text-lg font-semibold">
              Total: ₹{getTotalAmount().toFixed(2)}
            </h3>
          </div>
          <Link to="/checkout">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
