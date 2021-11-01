import {Route} from 'react-router';
import './App.css';
import {DialogsPage} from './components/dialogspage/dialogspage';
import {Header} from './components/header/header';
import {Navbar} from './components/navbar/navbar';
import {MyPage} from "./components/mypage/mypage";
import { stateType,ActionsTypes } from './redux/state';


type propsType = {
    state:stateType
    dispatch:(action:ActionsTypes)=>void

}


function App(props: propsType) {

    return (

        <div className="App">

            <Header/>

            <Navbar/>
          
            <div className="content">

                <Route path="/Dialogs" render={() => <DialogsPage state={props.state.dialogsPage} />}/>


                <Route path="/MyPage" render={() => <MyPage 
                
                profilePage={props.state.profilePage}  
                dispatch={props.dispatch}
                />}/>

            </div>

        </div>

    )
}

export default App;
