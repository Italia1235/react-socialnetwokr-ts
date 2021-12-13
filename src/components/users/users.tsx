import styles from './users.module.css'
import userPhoto from '../../pic/avatar.jpg'
import { UsersType } from '../../redux/users-reducer'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
type propsType = {
    users:UsersType[]
    usersCount:number
    pageSize:number
    currentPage:number
    follow: (userId:number)=>void
    unFollow:(userId:number)=>void
    onPageChanged:(p:number)=>void
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
   {u.followed?<button onClick={()=>
   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
   {withCredentials:true,
   headers:{'API-KEY':"26b2ff93-1b6c-416a-a42e-45366ec3f6b0"}},).then(res =>{
      if(res.data.resultCode===0){
         debugger
         props.unFollow(u.id)
      }
      
  })}>unFollow</button> 
   : 
   <button onClick={()=>
      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`
      ,{},{withCredentials:true,
      headers:{"API-KEY":"26b2ff93-1b6c-416a-a42e-45366ec3f6b0"}}).then(res =>{
         if(res.data.resultCode===0){
            props.follow(u.id)
         }



    
         
     })}>
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
   <div>"u.location.country"</div>
   <div>"u.location.city"</div>
</span>
</span>
   </div>)
   }
    </div>
}

