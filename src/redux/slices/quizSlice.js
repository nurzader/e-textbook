import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
  currentQuestion: 0
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state) => {
      state.currentQuestion = 0;
    },
    incrementScore: (state) => {
      state.score += 1;
    },
    incrementQuestion: (state) => {
      state.currentQuestion += 1;
    },
    resetQuiz: (state) => {
      state.score = 0;
      state.currentQuestion = 0;
    },
    
  },
});

export const { startQuiz, incrementScore, incrementQuestion, resetQuiz } = quizSlice.actions;

export const selectScore = (state) => state.quiz.score;
export const selectCurrentQuestion = (state) => state.quiz.currentQuestion;

export default quizSlice.reducer;
