
import { Preloader } from '../../../common/Preloader/Preloader'
import classes from './profileinfo.module.css'



export const ProfileInfo = (props:any) => { 
if(!props.profile){
   return <Preloader/>
}

return(
<div className={classes.profile}>
  
<div> <img  className ={classes.photo} src="https://i.imgur.com/Qj1Ne3Ph.jpg" alt="" /></div>
<span>{props.profile.aboutMe}</span>
<img src={props.profile.photos.large}/>

<div className={classes.infoMe} ><p>About me: frontend-react developer</p></div>

        
   </div>
  
)
}