import {Route} from 'react-router';
import './App.css';
import {DialogsPage} from './components/dialogspage/dialogspage';
import {Header} from './components/header/header';
import {Navbar} from './components/navbar/navbar';

import {MyPage} from "./components/mypage/mypage";
import {dialogsDataType, messagesDataType, postDataType, stateType} from "./redux/state";


type propsType = {
    postData: postDataType
    dialogsData: dialogsDataType
    messagesData: messagesDataType
    state:stateType
}


function App(props: propsType) {

    return (

        <div className="App">

            <Header/>

            <Navbar/>
            <div className="content">

                <Route path="/Dialogs" render={() => <DialogsPage messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>


                <Route path="/MyPage" render={() => <MyPage postData={props.postData}/>}/>

            </div>

        </div>

    )

}

export default App;
