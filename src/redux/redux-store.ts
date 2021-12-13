import { authReducer } from './auth-reducer';
import { dialogsReducer } from './Dialogs-reducer';
import { profileReducer } from './Profile-reducer';
import { combineReducers, createStore } from "redux"
import { userReducer } from './users-reducer';

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType <RootReducersType>

export type StoreType = typeof store


const rootReducers = combineReducers({profilePage:profileReducer
    ,dialogsPage:dialogsReducer,
usersPage: userReducer,
auth:authReducer,
})


export const store = createStore(rootReducers)

