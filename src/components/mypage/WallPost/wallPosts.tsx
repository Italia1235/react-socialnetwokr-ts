import { Post } from "./Post/post"
import React, { RefObject } from 'react';
import classes from "./WallPosts.module.css"
import  {ProfilePageType} from "../../../redux/state";



type propsType =
    {
       state:ProfilePageType
       addPost:(postText:string)=>void
       updateNewPostText:(newText:string)=>void
    }


export const WallPosts = (props:propsType) => {


let postElement = props.state.postData.map(t =>( <Post message={t.post} likesCount={t.likesCount}/>

    ))
    
    let newPostElement = React.createRef<HTMLTextAreaElement>()
let addPost = () =>{
if(newPostElement.current){
    props.addPost(newPostElement.current.value)
    newPostElement.current.value=""
}
}   

const onPostChange = ()=>{
    if(newPostElement.current)
props.updateNewPostText(newPostElement.current.value)
}

    return ( 
        <div>



<div><textarea onChange={onPostChange} value={props.state.newPostText} ref={newPostElement} className={classes.textar} placeholder ="Write youre..."></textarea></div>
<div ><button onClick={addPost} className={classes.button}>Add post</button>     </div>

{postElement}

        </div>
        
    )
    }