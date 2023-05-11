import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

import {filterReducer} from "./filterReducer";

const rootReducer = combineReducers({
  filter: filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))