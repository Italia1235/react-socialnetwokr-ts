import styles from './users.module.css'
import userPhoto from '../../pic/avatar.jpg'
import { UsersType } from '../../redux/users-reducer'
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
       {pages.map(p=>{ return<span onClick={()=>{props.onPageChanged(p)}} className=
       {props.currentPage===p?styles.selectedPage:""}>{p}</span>})}
    </div>
          {
   props.users.map(u=> <div key={u.id}>
<span>
<div>
   <img alt={u.name} src={u.photos.small !=null 
    ? u.photos.small : userPhoto} className={styles.userPhoto}/>
</div>
<div>
   {u.followed?<button onClick={()=>props.follow(u.id)}>unFollow</button> 
   : <button onClick={()=>props.unFollow(u.id)}>Follow</button> }
 
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

