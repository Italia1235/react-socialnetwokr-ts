import {Route} from 'react-router';
import './App.css';
import {Header} from './components/header/header';
import {Navbar} from './components/navbar/navbar';
import {MyPage} from "./components/mypage/mypage";
import { DialogsPageContainer } from './components/dialogspage/dialogspageContainer';
import {UsersContainer} from './components/users/usersContainer';


type propsType = {
}

function App(props: propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path="/Dialogs" render={() => <DialogsPageContainer/>}/>
                <Route path="/MyPage" render={() => <MyPage  />}/>
              
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>

        </div>
    )
}

export default App;
