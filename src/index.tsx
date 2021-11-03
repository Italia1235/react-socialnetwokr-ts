import React from 'react';
import ReactDOM from 'react-dom';
import { store} from './redux/redux-store'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


export const  rerenderTree=()=>{ 
  ReactDOM.render(
  
  <React.StrictMode>
      <BrowserRouter>
      <App   state={store.getState()} store={store} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root') );
  }
  
rerenderTree()
let state= store.getState()
store.subscribe(()=>{rerenderTree(store.getState())})