import {Route} from 'react-router';
import './App.css';
import {DialogsPage} from './components/dialogspage/dialogspage';
import {Header} from './components/header/header';
import {Navbar} from './components/navbar/navbar';
import {MyPage} from "./components/mypage/mypage";
import { stateType } from './redux/state';


type propsType = {
    
    state:stateType
    updateNewPostText:(newText:string)=>void
   addPost:(postText:string)=>void
}


function App(props: propsType) {

    return (

        <div className="App">

            <Header/>

            <Navbar/>
          
            <div className="content">

                <Route path="/Dialogs" render={() => <DialogsPage state={props.state.dialogsPage} />}/>


                <Route path="/MyPage" render={() => <MyPage profilePage={props.state.profilePage}  addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>

            </div>

        </div>

    )
}

export default App;
