import { useState, useContext } from "react";
import React from "react";
import { GameStateContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";
function Quiz() {
  const { score, setScore, setGameState } = useContext(GameStateContext);
  const [currQuestion, setCurrentQuestion] = useState(0); //refrene to the array of questions like an index for each
  //when setcurrentquestion equals to zero, so only first question is applied. and so on
  //so when we click on next question button, the only thing we do is increment setcurrentquestion by one to show the next one
  const [optionChosen, setOptionChosen] = useState("");
  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currQuestion + 1);
    setOptionChosen("");
  };
  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button
          className={optionChosen === "optionA" ? "selected" : ""}
          onClick={() => setOptionChosen("optionA")}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          className={optionChosen === "optionB" ? "selected" : ""}
          onClick={() => setOptionChosen("optionB")}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          className={optionChosen === "optionC" ? "selected" : ""}
          onClick={() => setOptionChosen("optionC")}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          className={optionChosen === "optionD" ? "selected" : ""}
          onClick={() => setOptionChosen("optionD")}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion == Questions.length - 2 ? (
        <>
          <button id="big-btn" onClick={finishQuiz}>
            Finish Quiz
          </button>
        </>
      ) : (
        <button id="big-btn" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
