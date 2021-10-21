import { Post } from "./Post/post"
import React from 'react';
import classes from "./WallPosts.module.css"
import {ProfilePageType} from "../../../redux/state";




type propsType =
    {
       state:ProfilePageType
    }


export const WallPosts = (props:propsType) => {


let postElement = props.state.postData.map(t =>( <Post message={t.post} likesCount={t.likesCount}/>

    ))

    let newPostElement = React.createRef()
let addPost = () =>{

    let text = newPostElement.current.value;
    alert (text)
}

    return ( 
        <div>



<div><textarea ref={newPostElement} className={classes.textar} placeholder ="Write youre..."></textarea></div>
<div ><button onClick={addPost} className={classes.button}>Add post</button>     </div>

{postElement}

        </div>
        
    )
    }