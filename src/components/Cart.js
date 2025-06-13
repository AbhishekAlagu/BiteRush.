import { useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclear = (cartItems) => {
    dispatch(clearCart(cartItems));
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className=" w-6/12 m-auto">
        <Itemlist items={cartItems} />
      </div>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg "
        onClick={() => handleclear(cartItems)}
      >
        Clear Cart
      </button>
      {cartItems.length == 0 && <h1>Cart is empty,Add items to the Cart !!</h1>}
    </div>
  );
};

export default Cart;
