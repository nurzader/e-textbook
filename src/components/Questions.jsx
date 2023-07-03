import React from 'react';
import Button from '../components/Button';
import questions from '../assets/questions.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuestion,
  incrementScore,
  selectCurrentQuestion
} from '../redux/slices/quizSlice';
import TestResult from './TestResult';

const Questions = () => {
  const currentQuestion = useSelector(selectCurrentQuestion);
  const dispatch = useDispatch();

  const handleAnswer = (i) => {
    if (i === currentQuestionData.correctAnswer) {
      dispatch(incrementScore());
    }
  };

  const currentQuestionData = questions[currentQuestion];

  if (currentQuestion >= questions.length) {
    return <TestResult questions={questions} />;
  }

  return (
    <div className="flex flex-col items-center pl-5">
      <p className="self-end text-lg">
        Вопрос
        <span className="text-sky-700 font-semibold"> {currentQuestion + 1}</span> из
        <span className="text-gray-500 font-semibold"> {questions.length}</span>
      </p>
      <h4 className="self-start font-semibold text-lg mb-10">{currentQuestionData.question}</h4>
      <ul className="self-start flex flex-col gap-3 mb-10">
        {currentQuestionData.options.map((option, i) => (
          <li key={i}>
            <label className="cursor-pointer flex items-center gap-3">
              <input
                onChange={() => handleAnswer(i)}
                type="radio"
                name="list-radio"
                value={option}
                className="w-4 h-4 cursor-pointer"
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <Button onClick={() => dispatch(incrementQuestion())} title="Продолжить" />
    </div>
  );
};

export default Questions;
