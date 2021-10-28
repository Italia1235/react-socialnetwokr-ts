import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/state'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { addPost, updateNewPostText } from './redux/state';





export const  rerenderTree=(state)=>{ 
  ReactDOM.render(
  
  <React.StrictMode>
      <BrowserRouter>
      <App   state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
   
  );
  }
  ;
rerenderTree(state)