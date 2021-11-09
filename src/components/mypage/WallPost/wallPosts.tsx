import { Post } from "./Post/post"
import React from 'react';
import classes from "./WallPosts.module.css"
import { AppStateType } from "../../../redux/redux-store";



type propsType =
    {
       state:AppStateType
       updateNewPostText:(text:string)=>void
       addPost:()=>void
    }

export const WallPosts = (props:propsType) => {
const postElement = props.state.profilePage.postData.map(t =><Post message={t.post} likesCount={t.likesCount}/>)

const newPostElement = React.createRef<HTMLTextAreaElement>()
const onAddPost = () =>
{
if(newPostElement.current){
    props.addPost()}}

const onPostChange = ()=>{
    if(newPostElement.current)
props.updateNewPostText(newPostElement.current.value)

}

    return ( 
        <div>
<div><textarea onChange={onPostChange} value={props.state.profilePage.newPostText} ref={newPostElement} className={classes.textar} placeholder ="Write youre..."></textarea></div>
<div ><button onClick={onAddPost} className={classes.button}>Add post</button>     </div>

{postElement}

        </div>
        
    )
    }