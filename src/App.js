import React from 'react';
import {Provider} from 'react-redux'

import './App.css';

import store from './store'
import Posts from './components/Posts'
import Postform from './components/Postform'


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
