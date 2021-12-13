import {Route} from 'react-router';
import './App.css';
import {Navbar} from './components/navbar/navbar';
import { DialogsPageContainer } from './components/dialogspage/dialogspageContainer';
import {UsersContainer} from './components/users/usersContainer';
import MyPageContainer from './components/mypage/myPageContainer';
import HeaderContainer from './components/header/HeaderContainer';



type propsType = {
}

function App(props: propsType) {
    return (
        <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <div className="content">
                <Route path="/Dialogs" render={() => <DialogsPageContainer/>}/>
                <Route path="/MyPage/:userId?" render={() => <MyPageContainer  />}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>

        </div>
    )
}

export default App;
