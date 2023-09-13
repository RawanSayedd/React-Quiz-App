import { useContext } from "react";
import React from "react";
import { GameStateContext } from "../Helpers/Contexts";
import "../App.css";

function MainMenu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <label>Enter Your E-mail:</label>
      <input type="email" placeholder="Ex. JohnSmith@example.com" />
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
