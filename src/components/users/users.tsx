import styles from './users.module.css'
import userPhoto from '../../pic/avatar.jpg'
import { UsersType } from '../../redux/users-reducer'
import {NavLink} from 'react-router-dom'
import { FollowUser, unFollowUser } from '../../api/api'
type propsType = {
    users:UsersType[]
    usersCount:number
    pageSize:number
    currentPage:number
    disableButton:number[]
    follow: (userId:number)=>void
    unFollow:(userId:number)=>void
    onPageChanged:(p:number)=>void
    disableButtonAC:(disable:boolean,userId:number)=>void
}


export const Users = (props:propsType) =>{
    let pagesCount:number = Math.ceil(props.usersCount/props.pageSize)

    let pages :number[]= []
    for(let i = 1;i<pagesCount;i++){
        pages.push(i);
    }


    return  <div> 
    <div>
       {pages.map(p=>{ return<span  onClick={()=>{props.onPageChanged(p)}} className=
       {props.currentPage===p?styles.selectedPage:""}>{p}</span>})}
    </div>
          {
   props.users.map(u=> <div key={u.id}>
<span>
<div>
   <NavLink to={"/MyPage/"+u.id}>
   <img alt={u.name} src={u.photos.small !=null 
    ? u.photos.small : userPhoto} className={styles.userPhoto}/>
    </NavLink>
</div>

<div>
   {u.followed?<button disabled={props.disableButton.some(id=>id===u.id)} onClick={()=>{
  props.disableButtonAC(true,u.id)
   unFollowUser(u.id).then(res =>{
      if(res.data.resultCode===0){
               props.unFollow(u.id)
      } 
      props.disableButtonAC(false,u.id)     
   })}}>unFollow</button> 
   : 
   <button disabled={props.disableButton.some(id=>id===u.id)} onClick={()=>{
      props.disableButtonAC(true,u.id)
      FollowUser(u.id).then(res =>{
         if(res.data.resultCode===0){
            props.follow(u.id)
         }
         props.disableButtonAC(false,u.id)         
     })}}>
     Follow</button> 
}
</div>
</span>
<span>
<span>
   <div>{u.name}</div>
   <div>{u.status}</div>
</span>
<span>
</span>
</span>
   </div>)
   }
    </div>
}

