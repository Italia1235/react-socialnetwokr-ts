import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import { WallPosts } from './WallPost/wallPosts'
import {ActionsTypes} from "../../redux/store";
import { AppStateType } from '../../redux/redux-store';
import { WallPostsContainer } from './WallPost/wallPostContainer';


type propsType = {
        profilePage:AppStateType
        dispatch:(action:ActionsTypes)=>void}

export const MyPage = (props:propsType) => {
    return (
<div className={classes.mypage}>
<ProfileInfo/>
<WallPostsContainer 
state={props.profilePage}
dispatch={props.dispatch}/>
        </div>)
}