import { dialogsReducer } from './Dialogs-reducer';
import { profileReducer } from './Profile-reducer';
import { combineReducers, createStore } from "redux"

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType <RootReducersType>

export type StoreType = typeof store

const rootReducers = combineReducers({profilePage:profileReducer
    ,dialogsPage:dialogsReducer})


export const store = createStore(rootReducers)

