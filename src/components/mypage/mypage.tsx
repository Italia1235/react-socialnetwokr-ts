import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import { WallPosts } from './WallPost/wallPosts'
import {ProfilePageType} from "../../redux/state";


type propsType =
    {
        profilePage:ProfilePageType
        addPost:(postText)=>void
        updateNewPostText:(newText:string)=>void
}

export const MyPage = (props:propsType) => {
    return (<div className={classes.mypage}>




        <ProfileInfo/>

<WallPosts updateNewPostText={props.updateNewPostText} state={props.profilePage}
 addPost={props.addPost}/>

        </div>)
}