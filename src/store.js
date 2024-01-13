import { applyMiddleware, combineReducers, createStore } from "redux";
import acountreducer from "./features/accounts/accounrSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
const rootReducer = combineReducers({
  account: acountreducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
