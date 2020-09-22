import React from 'react';
import {Provider} from 'react-redux'

import './App.css';

import Posts from './components/Posts'
import Postform from './components/Postform'
import { createStore, applyMiddleware } from 'redux';

const store=createStore(()=>[],{},applyMiddleware())

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Postform/>
        <hr></hr>
      <Posts/>
      
    </div>
    </Provider>
  );
}

export default App;
