import { useContext, useState } from "react";
import React from "react";
import { GameStateContext } from "../Helpers/Contexts";
import "../App.css";

function MainMenu() {
  const {
    gameState,
    setGameState,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
  } = useContext(GameStateContext);
  const [showErrorMessage, setShowErrorMessage] = useState(false); // State to track if the error message should be displayed

  const handleStartQuiz = () => {
    if (!userName || !userEmail) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      setGameState("quiz");
    }
  };
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
      <input
        type="email"
        placeholder="Ex. JohnSmith@example.com"
        onChange={(event) => {
          setUserEmail(event.target.value);
        }}
      />

      {showErrorMessage && <small>Please enter your name and email.</small>}

      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default MainMenu;
