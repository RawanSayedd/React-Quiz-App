import "./App.css";
import React, { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { GameStateContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu"); //first state.. displaying the main menu.. starting the quiz (GLOBAL STATE)
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          userName,
          setUserName,
          userEmail,
          setUserEmail,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
