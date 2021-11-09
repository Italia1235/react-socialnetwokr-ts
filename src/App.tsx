import {Route} from 'react-router';
import './App.css';
import {DialogsPage} from './components/dialogspage/dialogspage';
import {Header} from './components/header/header';
import {Navbar} from './components/navbar/navbar';
import {MyPage} from "./components/mypage/mypage";
import {ActionsTypes } from './redux/store';
import { AppStateType, StoreType } from './redux/redux-store';
import { DialogsPageContainer } from './components/dialogspage/dialogspageContainer';


type propsType = {
    store:StoreType
    dispatch:(action:ActionsTypes)=>void
}

function App(props: propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path="/Dialogs" render={() => <DialogsPageContainer 
                store={props.store}/>}/>
                <Route path="/MyPage" render={() => <MyPage 
                profilePage={props.store.getState()}  
                dispatch={props.dispatch}
                />}/>

            </div>

        </div>
    )
}

export default App;
