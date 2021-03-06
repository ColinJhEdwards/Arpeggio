import axios from "axios";

//set up the initial state of the reducer
const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

//create a switch statement for the reducer based of the action.type
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    //When an action is used that has a type of FETCH_GAMES the state "popular/upcoming/newGames will recieve the payload from the action of gamesAction.js that has the type of fetch_games "
    case "FETCH_GAMES":
      return {
        //Take whatever the current state is and add the following
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.new,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
