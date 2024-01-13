import acountreducer from "./features/accounts/accounrSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: acountreducer,
    customer: customerReducer,
  },
});

export default store;
