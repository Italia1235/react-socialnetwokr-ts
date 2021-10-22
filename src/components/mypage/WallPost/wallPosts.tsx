import { Post } from "./Post/post"
import React, { RefObject } from 'react';
import classes from "./WallPosts.module.css"
import state, {ProfilePageType} from "../../../redux/state";



type propsType =
    {
       state:ProfilePageType
       addPost:(postText:string)=>void
    }


export const WallPosts = (props:propsType) => {


let postElement = props.state.postData.map(t =>( <Post message={t.post} likesCount={t.likesCount}/>

    ))
    
    let newPostElement = React.createRef<HTMLTextAreaElement>()
let addPost = () =>{

    props.addPost(newPostElement.current? newPostElement.current.value:"123")
}

    return ( 
        <div>



<div><textarea ref={newPostElement} className={classes.textar} placeholder ="Write youre..."></textarea></div>
<div ><button onClick={addPost} className={classes.button}>Add post</button>     </div>

{postElement}

        </div>
        
    )
    }