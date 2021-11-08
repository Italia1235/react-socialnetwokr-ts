import { Post } from "./Post/post"
import React from 'react';
import classes from "./WallPosts.module.css"
import  {AddPostActionCreator,changeNewTextAC,ActionsTypes} from "../../../redux/store";
import { ProfilePageType } from "../../../redux/store";
import { AppStateType } from "../../../redux/redux-store";



type propsType =
    {
       state:AppStateType
       dispatch:(action:ActionsTypes)=>void
    }

 

  

export const WallPosts = (props:propsType) => {

let postElement = props.state.profilePage.postData.map(t =><Post message={t.post} likesCount={t.likesCount}/>)

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



<div><textarea onChange={onPostChange} value={props.state.profilePage.newPostText} ref={newPostElement} className={classes.textar} placeholder ="Write youre..."></textarea></div>
<div ><button onClick={addPost} className={classes.button}>Add post</button>     </div>

{postElement}

        </div>
        
    )
    }