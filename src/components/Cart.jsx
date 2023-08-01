import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  remove,
  incrementInCart,
  decrementInCart,
  calculatePrice,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );

  const handleRemove = (productId) => {
    dispatch(remove(productId));
    dispatch(calculatePrice());
  };

  const increment = (productId) => {
    dispatch(incrementInCart(productId));
    dispatch(calculatePrice());
  };

  const decrement = (productId) => {
    dispatch(decrementInCart(productId));
    dispatch(calculatePrice());
  };

  return (
    <div>
      <h3 className="heading">Cart</h3>
      <div className="cartWrapper">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((product) => (
              <div className="cartCard" key={product.id}>
              <div className="cart-image">
                <img src={product.image} alt={product.title} />
              </div>
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <div className="btns">
                  <button className="btn" onClick={() => decrement(product.id)}>
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button className="btn" onClick={() => increment(product.id)}>
                    +
                  </button>
                </div>
                <button
                  className="btn"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <aside className="cart-total">
              <h2>Subtotal: ${subTotal}</h2>
              <h2>Shipping: ${shipping}</h2>
              <h2>Tax: ${tax}</h2>
              <h2>Total: ${total}</h2>
            </aside>
          </div>
        ) : (
          <h1>No Items Yet</h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
