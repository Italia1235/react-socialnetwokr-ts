
import { Route } from 'react-router';
import './App.css';
import { DialogsPage } from './components/dialogspage/dialogspage';
import { Header } from './components/header/header';
import { MyPage } from './components/mypage/mypage';
import { Navbar } from './components/navbar/navbar';

function App() {

  return (
 
    <div className="App">
     
    <Header/>
    
    <Navbar/>
<div className="content">

<Route  path ="/Dialogs" component ={DialogsPage}/>


    <Route  path ="/MyPage" component ={MyPage}/>

    </div>

    </div>

  )

}

export default App;
