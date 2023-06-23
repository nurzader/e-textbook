import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectScore, resetQuiz } from '../redux/slices/quizSlice';

const TestResult = ({questions}) => {
  const score = useSelector(selectScore);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-10">
      <p className="font-bold text-2xl">Вы ответили правильно {score} из {questions.length}</p>
      <div>
        <Link to="/test">
          <Button onClick={() => dispatch(resetQuiz())} title="Пройти тест заново" />
        </Link>
      </div>
    </div>
  );
};

export default TestResult;
