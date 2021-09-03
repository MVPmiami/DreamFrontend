import './index.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import Header from './components/Header/header'
import { Provider } from 'react-redux';
import {store} from './reducers';

render (
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
)