import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import { WallPosts } from './WallPost/wallPosts'
import {ProfilePageType,ActionsTypes} from "../../redux/state";


type propsType =
    {
        profilePage:ProfilePageType
        dispatch:(action:ActionsTypes)=>void
        
}

export const MyPage = (props:propsType) => {
    return (<div className={classes.mypage}>




        <ProfileInfo/>

<WallPosts  
state={props.profilePage}
 dispatch={props.dispatch}/>

        </div>)
}