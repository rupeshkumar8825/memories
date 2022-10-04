import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducers from "./reducers";
import {createStore, applyMiddleware, compose} from "redux";

// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


// now we have to create the store for this application 
const store = createStore(reducers, compose(applyMiddleware(thunk)));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>


  // </React.StrictMode>
);
