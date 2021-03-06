import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useLocation } from "react-router-dom";
//Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
//Styling and animation
import styled from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const Home = () => {
  //fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get data from state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {path && <GameDetails pathId={path} />}
        </AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem, 5rem;
  h2 {
    padding: 5rem 0rem;
    margin: 0rem 2rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
