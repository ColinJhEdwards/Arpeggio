import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { gameScreenshotURL } from "../api";

const GameDetails = () => {
  //data
  const { screen, details } = useSelector((state) => state.details);
  console.log(details);
  return (
    <CardShadow className="card-shadow">
      <Detail className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{details.name}</h3>
            <p>Rating: {details.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {details.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={details.background_image} alt="image" />
        </div>
        <div className="description">
          <p>{details.description_raw}</p>
        </div>
        <div className="gallery">
          {screen.results.map((screen) => (
            <img src={screen.image} key={screen.id} alt="image" />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: blue;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

export default GameDetails;