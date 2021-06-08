import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

//action create

export const loadGames = () => async (dispatch) => {
  //fetch with axios
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      new: newGamesData.data.results,
    },
  });
};
