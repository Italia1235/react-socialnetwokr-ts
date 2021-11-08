import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import { WallPosts } from './WallPost/wallPosts'
import {ProfilePageType,ActionsTypes} from "../../redux/store";
import { AppStateType } from '../../redux/redux-store';


type propsType = {
        profilePage:AppStateType
        dispatch:(action:ActionsTypes)=>void}

export const MyPage = (props:propsType) => {
    return (
<div className={classes.mypage}>
<ProfileInfo/>
<WallPosts  
state={props.profilePage}
dispatch={props.dispatch}/>
        </div>)
}