import { combineReducers, createStore } from "redux";
import acountreducer from "./features/accounts/accounrSlice";
import customerReducer from "./features/customers/customerSlice";
const rootReducer = combineReducers({
  account: acountreducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
