//Starting point for the app

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import lodcApp from './components/redux/Reducers'


let store = createStore(lodcApp);
store.dispatch({type: "SET_LANG_DATA", lang: "en"});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
