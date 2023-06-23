import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizSlice from '../redux/slices/quizSlice';

const store = combineReducers({
  quiz: quizSlice,
});


export default configureStore({ reducer: store });
