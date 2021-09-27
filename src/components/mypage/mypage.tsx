import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import { WallPosts } from './WallPost/wallPosts'
import {postDataType} from "../../redux/state";


type propsType =
    {
    postData: postDataType
}

export const MyPage = (props:propsType) => {
    return (<div className={classes.mypage}>




        <ProfileInfo/>

<WallPosts postData={props.postData}/>

        </div>)
}