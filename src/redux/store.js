import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filtersReducer from "./filters/filtersReducer";

const store = createStore(filtersReducer, composeWithDevTools());

export default store;
