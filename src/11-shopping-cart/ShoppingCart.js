import { useReducer, useState } from "react";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

const initialState = {
  cart: [],
  total: 0,
};

function reducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    const itemInCart = state.cart.find(
      (item) => item.name === action.item.name
    );
    if (itemInCart) {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.name === action.item.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total: state.total + action.item.price,
      };
    }
    return {
      ...state,
      cart: [...state.cart, { ...action.item, quantity: 1 }],
      total: state.total + action.item.price,
    };
  }

  if (action.type === "ADD_QUANTITY") {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.name === action.item.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
      total: state.total + action.item.price,
    };
  }

  if (action.type === "SUBTRACT_QUANTITY") {
    // if quantity is 1, remove item from cart
    if (action.item.quantity === 1) {
      return {
        ...state,
        cart: state.cart.filter((item) => item.name !== action.item.name),
        total: state.total - action.item.price,
      };
    }
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.name === action.item.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
      total: state.total - action.item.price,
    };
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => dispatch({ type: "ADD_TO_CART", item })}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {state.cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button
                  onClick={() => dispatch({ type: "SUBTRACT_QUANTITY", item })}
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => dispatch({ type: "ADD_QUANTITY", item })}
                >
                  +
                </button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>{`Total: ${state.total}`}</h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
