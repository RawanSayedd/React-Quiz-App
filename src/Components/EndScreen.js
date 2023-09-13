import { useContext, useState } from "react";
import React from "react";
import { Questions } from "../Helpers/QuestionBank";
import { GameStateContext } from "../Helpers/Contexts";
import "../App.css";

function EndScreen() {
  const [timer, setTimer] = useState(0);

  const { score, setScore, setGameState, userName } =
    useContext(GameStateContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("quiz");
  };

  return (
    <div className="end-screen">
      {timer > 0 ? (
        <>
          <h1>Quiz Finished!</h1>
          <h3>{userName}</h3>
        </>
      ) : (
        <>
          <h1>Time Out!</h1>
          <h3>{userName}</h3>
        </>
      )}
      <h2>
        Your Score is: <br />
        {score + 1} / {Questions.length}
      </h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
