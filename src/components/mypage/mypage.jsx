import classes from './mypage.module.css'
import { WallPosts } from './WallPost/wallPosts'

export const MyPage = () => { 
    return (<div className={classes.mypage}>
        
<WallPosts/>

        </div>)
}