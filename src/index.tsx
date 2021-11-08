import React from 'react';
import ReactDOM from 'react-dom';
import { AppStateType, store} from './redux/redux-store'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'


export const  rerenderTree=(state:AppStateType)=>{ 
  ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <App  store={store}  dispatch={store.dispatch.bind(store)} />
   
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root') );
  }
  
rerenderTree(store.getState())
store.subscribe(()=>{rerenderTree(store.getState())})