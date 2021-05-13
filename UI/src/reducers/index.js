import Search_reducer from "./Search_reducer.js";
import Row_reducer from "./Row_reducer.js"
import {combineReducers} from "redux";
const allReducer=combineReducers({
    Row:Row_reducer,
    Search:Search_reducer
})
export default allReducer;