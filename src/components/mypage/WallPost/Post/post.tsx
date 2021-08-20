
import classes from './post.module.css'

type Typemessage = { 
    message:string;
}


export const Post = (props:Typemessage) => { 
return(
<div className={classes.post}>
  
        <div className={classes.avatar}>
    <img src="https://99px.ru/sstorage/41/2018/07/image_411207182122353700816.png" alt=""></img> 
    </div>
<div className={classes.postBody}> {props.message} </div>
  
   </div>
  
)
}