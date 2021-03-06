import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
//Styling and animation
import styled from "styled-components";
//redux
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, id, image }) => {
  const stringPathID = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame layoutId={stringPathID} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  margin: 2rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
