import axios from "axios";
// import functions that create links for specific api methods from api.js
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

//action creater

export const loadGames = () => async (dispatch) => {
  //fetch with axios
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    //set what the payload is for each api fetch
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      new: newGamesData.data.results,
    },
  });
};
