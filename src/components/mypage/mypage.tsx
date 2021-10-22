import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import { WallPosts } from './WallPost/wallPosts'
import {ProfilePageType} from "../../redux/state";


type propsType =
    {
        state:ProfilePageType
        addPost:(postText)=>void
}

export const MyPage = (props:propsType) => {
    return (<div className={classes.mypage}>




        <ProfileInfo/>

<WallPosts state={props.state} addPost={props.addPost}/>

        </div>)
}