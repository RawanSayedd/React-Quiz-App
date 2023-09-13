import { useContext } from "react";
import React from "react";
import { GameStateContext } from "../Helpers/Contexts";
import "../App.css";

function MainMenu() {
  const { gameState, setGameState } = useContext(GameStateContext);
  return (
    <div className="menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
