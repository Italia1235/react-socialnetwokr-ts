import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import { WallPostsContainer } from './WallPost/wallPostContainer';


type propsType = {
        }

export const MyPage = (props:propsType) => {
    return (
<div className={classes.mypage}>
<ProfileInfo/>
<WallPostsContainer/>
        </div>)
}