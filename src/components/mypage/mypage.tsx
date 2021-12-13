import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import {WallPostsContainer } from './WallPost/wallPostContainer';


export const MyPage = (props) => {
    return (
<div className={classes.mypage}>
<ProfileInfo profile={props.profile} />
<WallPostsContainer />
        </div>)
}