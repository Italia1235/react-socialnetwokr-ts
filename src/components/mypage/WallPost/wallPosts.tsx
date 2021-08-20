import { Post } from "./Post/post"
import clacess from "./WallPosts.module.css"

export const WallPosts = () => {

    return ( 
        <div>Wall

<div><textarea placeholder ="Write youre..."></textarea></div>
<div><button>Add post</button>    <button>Delete post</button>  </div>

<Post message="I learn React!"/>
<Post message="I like my mother :3"/>          
        </div>
        
    )
    }