import { Post } from "./Post/post"

import classes from "./WallPosts.module.css"
import {postDataType} from "../../../redux/state";




type propsType =
    {
        postData: postDataType
    }


export const WallPosts = (props:propsType) => {


let postElement = props.postData.map(t =>( <Post message={t.post} likesCount={t.likesCount}/>
    ))


    return ( 
        <div>



<div><textarea className={classes.textar} placeholder ="Write youre..."></textarea></div>
<div ><button className={classes.button}>Add post</button>     </div>

{postElement}

        </div>
        
    )
    }