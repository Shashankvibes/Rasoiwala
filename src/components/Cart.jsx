import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Add some items!</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 border-b py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.cuisine}</p>
                <span className="text-yellow-500">⭐ {item.rating}</span>
              </div>
            </div>
          ))}

          <button
            className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
