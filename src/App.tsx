import {Route} from 'react-router';
import './App.css';
import {Navbar} from './components/navbar/navbar';
import dialog from './components/dialogspage/dialogspageContainer';
import {UsersContainer} from './components/users/usersContainer';
import MyPageContainer from './components/mypage/myPageContainer';
import HeaderContainer from './components/header/HeaderContainer';
import { Login } from './components/login/login';



type propsType = {
}

function App(props: propsType) {
    return (
        <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <div className="content">
                <Route path="/Dialogs" render={() => <dialog/>}/>
                <Route path="/MyPage/:userId?" render={() => <MyPageContainer  />}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>

        </div>
    )
}

export default App;
