// improt combineReducers for adding mutible reducers to the store
import { combineReducers } from "redux";
//import the reducer you wish to add
import gamesReducer from "./gamesReducer";

//give the reducer a name so it can be referenced
const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
