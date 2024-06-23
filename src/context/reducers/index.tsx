import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";

const myReducer = combineReducers({
  productList: ProductReducer
});

export default myReducer;