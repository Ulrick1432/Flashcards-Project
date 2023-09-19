/*This code is responsible for configuring and creating a Redux store 
for a Redux-based state management system in a React application*/

import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from '../features/topics/topicsSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';
import cardsReducer from '../features/cards/cardsSlice';

//The configureStore function is invoked to create a Redux store. It takes an object as an argument with a reducer property.
export default configureStore({
  //The reducer property is an object that specifies how each slice of the application's state is managed.
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
});

/*
  The configureStore function configures the store with good default settings, such as support for Redux DevTools and middleware, 
  making it easier to set up a Redux store with minimal boilerplate code.
  By exporting this configured Redux store, other parts of the application can import and use it to access and manage
  the application's state. This setup is common in Redux applications, as it centralizes state management and provides
  a structured way to manage different slices of the application's state using reducers.
*/