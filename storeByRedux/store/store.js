import { legacy_createStore as createStore } from "redux";

import combineReducers from "../reducer/combine";
const store = createStore(combineReducers);

// store.subscribe(() => {
//   localStorage.setItem("cart", JSON.stringify(store.getState().cart.cart));
// });

export default store;
