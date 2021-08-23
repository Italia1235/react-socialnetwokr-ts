
import classes from './post.module.css'

type Typemessage = { 
    message:string;
    likesCount:number;
}


export const Post = (props:Typemessage) => { 
return(
<div className={classes.post}>

    
  
        <div className={classes.avatar}>
    <img src="https://i.imgur.com/Qj1Ne3Ph.jpg" alt=""></img> 
    </div>
<div className={classes.postBody}> {props.message} </div>
  <div> Likes:{props.likesCount}</div>
   </div>
  
)
}