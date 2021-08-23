import classes from './mypage.module.css'
import { ProfileInfo } from './WallPost/ProfileInfo/profileinfo'
import { WallPosts } from './WallPost/wallPosts'

export const MyPage = () => { 
    return (<div className={classes.mypage}>
        
        <ProfileInfo/>

<WallPosts/>

        </div>)
}