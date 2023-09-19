import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './app/App';
import { Provider } from "react-redux"; //It's used to provide Redux store data to the components in the application.
import store from "./app/store";
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/*Provider, passing the store as a prop. This allows the application's components to access the Redux store and its state.*/}
      <App /> 
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
