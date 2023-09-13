import { useContext } from "react";
import React from "react";
import { Questions } from "../Helpers/QuestionBank";
import { GameStateContext } from "../Helpers/Contexts";
import "../App.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(GameStateContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("quiz");
  };
  return (
    <div className="end-screen">
      <h1>Quiz Finished</h1>
      <h2>
        Your Score is: <br />
        {score + 1} / {Questions.length}
      </h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
