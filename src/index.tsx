import React from 'react';
import ReactDOM from 'react-dom';
import { store} from './redux/redux-store'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'


export const  rerenderTree=()=>{ 
  ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <App  store={store}  state={state} dispatch={()=>{return 1}}/>
   
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root') );
  }
  
rerenderTree()
let state=store.getState()
store.subscribe(()=>{rerenderTree()})