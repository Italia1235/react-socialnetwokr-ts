
import classes from './profileinfo.module.css'



export const ProfileInfo = () => { 
return(
<div className={classes.profile}>
  
<div> <img  className ={classes.photo} src="https://i.imgur.com/Qj1Ne3Ph.jpg" alt="" /></div>

<div className={classes.infoMe} ><p>About me: frontend-react developer</p></div>

        
   </div>
  
)
}