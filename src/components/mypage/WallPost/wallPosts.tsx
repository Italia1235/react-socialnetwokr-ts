import { Post } from "./Post/post"

import classes from "./WallPosts.module.css"




export const WallPosts = () => {

    let postData = [
        {id:1, post: "I learn React! ", likesCount:12},
        {id:2, post: "I like my mother :3",likesCount:1 },
    ]

let postElement = postData.map(t =>( <Post message={t.post} likesCount={t.likesCount}/>
    ))


    return ( 
        <div>



<div><textarea className={classes.textar} placeholder ="Write youre..."></textarea></div>
<div ><button className={classes.button}>Add post</button>     </div>

{postElement}

        </div>
        
    )
    }