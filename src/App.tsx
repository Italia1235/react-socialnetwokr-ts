import {Route} from 'react-router';
import './App.css';
import {Header} from './components/header/header';
import {Navbar} from './components/navbar/navbar';

import { DialogsPageContainer } from './components/dialogspage/dialogspageContainer';
import {UsersContainer} from './components/users/usersContainer';
import MyPageContainer from './components/mypage/myPageContainer';



type propsType = {
}

function App(props: propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path="/Dialogs" render={() => <DialogsPageContainer/>}/>
                <Route path="/MyPage" render={() => <MyPageContainer  />}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>

        </div>
    )
}

export default App;
