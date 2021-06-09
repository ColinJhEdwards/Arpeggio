// improt combineReducers for adding mutible reducers to the store
import { combineReducers } from "redux";
//import the reducer you wish to add
import gamesReducer from "./gamesReducer";
import detailsReducer from "./detailsReducer";

//give the reducer a name so it can be referenced
const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});

export default rootReducer;
