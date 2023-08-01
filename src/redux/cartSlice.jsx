const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  reducers: {
    addCart(state, action) {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) {
            i.quantity += 1;
          }
        });
      } else {
        state.cartItems.push(item);
      }
    },

    incrementInCart(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      state.cartItems.forEach((i) => {
        if (i.id === item.id) i.quantity += 1;
      });
    },

    decrementInCart(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
      }
    },

    remove(state, action) {
       state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload
      );
    },

    calculatePrice: (state) => {
        let sum = 0;
        state.cartItems.forEach((i) => (sum += i.price * i.quantity));
        state.subTotal = sum;
        state.shipping = state.subTotal > 1000 ? 0 : 200;
        state.tax = +(state.subTotal * 0.18).toFixed();
        state.total = state.subTotal + state.tax + state.shipping;
      },
  },
});

export const { addCart, remove, incrementInCart, decrementInCart, calculatePrice } = cartSlice.actions;
export default cartSlice.reducer;
