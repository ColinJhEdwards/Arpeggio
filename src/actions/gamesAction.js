import axios from "axios";
import { popularGamesURL } from "../api";

//action create

export const loadGames = () => async (dispatch) => {
  //fetch with axios
  const popularData = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
