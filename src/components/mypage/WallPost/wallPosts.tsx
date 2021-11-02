import { Post } from "./Post/post"
import React from 'react';
import classes from "./WallPosts.module.css"
import  {ProfilePageType,ActionsTypes,AddPostActionCreator,changeNewTextAC} from "../../../redux/state";



type propsType =
    {
       state:ProfilePageType
       dispatch:(action:ActionsTypes)=>void
    }

 

  

export const WallPosts = (props:propsType) => {

let postElement = props.state.postData.map(t =><Post message={t.post} likesCount={t.likesCount}/>)

let newPostElement = React.createRef<HTMLTextAreaElement>()
let addPost = () =>
{
if(newPostElement.current){
    props.dispatch(AddPostActionCreator())
}
}

const onPostChange = ()=>{
    
    if(newPostElement.current)
   
props.dispatch(changeNewTextAC(newPostElement.current.value))

}

    return ( 
        <div>



<div><textarea onChange={onPostChange} value={props.state.newPostText} ref={newPostElement} className={classes.textar} placeholder ="Write youre..."></textarea></div>
<div ><button onClick={addPost} className={classes.button}>Add post</button>     </div>

{postElement}

        </div>
        
    )
    }