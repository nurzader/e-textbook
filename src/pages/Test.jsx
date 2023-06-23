import React, { useState } from 'react';
import Questions from '../components/Questions';
import Button from '../UI/Button';
import { startQuiz } from '../redux/slices/quizSlice';
import { useDispatch } from 'react-redux';

const Test = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const dispatch = useDispatch();

  const onStart = () => {
    dispatch(startQuiz());
    setQuizStarted(true);
  };

  return (
    <div className="ml-auto mr-auto w-full h-[700px] max-w-[700px] pt-32 ">
      <h2 className="font-bold text-3xl mb-8 text-center">Тестирование знаний</h2>
      <div className="border border-gray-200 shadow-lg rounded-lg p-7 flex flex-col ">
        <div className="text-center">
          {!quizStarted ? <Button onClick={onStart} title="Пройти тестирование" /> : <Questions />}
        </div>
      </div>
    </div>
  );
};

export default Test;
