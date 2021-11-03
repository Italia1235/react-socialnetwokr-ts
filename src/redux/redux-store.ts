import { dialogsReducer } from './Dialogs-reducer';
import { profileReducer } from './Profile-reducer';
import { combineReducers, createStore } from "redux"

let rootReducers = combineReducers({profileReducer,dialogsReducer})

export const store = createStore(rootReducers)