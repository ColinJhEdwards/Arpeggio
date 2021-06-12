import axios from "axios";

const initState = {
  details: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        //Take whatever the current state is and add the following
        ...state,
        details: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default detailsReducer;
