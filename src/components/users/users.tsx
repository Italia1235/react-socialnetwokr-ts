import axios from "axios"
import {UsersType} from "../../redux/users-reducer"
import styles from './users.module.css'
import userPhoto from '../../pic/avatar.jpg'
import React from 'react'

interface UsersProps {
    users:UsersType[]
    follow: (userId:number)=>void
    unfollow:(userId:number)=>void
    setUser:any
}



  export class Users extends React.Component<UsersProps> { 
    
    
     getUsers = ()=>{
        if(this.props.users.length===0) {axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res =>{
           debugger
            this.props.setUser(res.data.items)
        })}}
    
         followAd = (userId:number)=>{
            this.props.follow(userId)
          }
           unFollowAd = (userId:number)=>{
              this.props.unfollow(userId)
          }
    
    render (){
        return <div> 
        <button onClick ={this.getUsers}>getUsers</button>
           {
           this.props.users.map(u=> <div key={u.id}>
   <span>
       <div>
           <img alt={u.name} src={u.photos.small !=null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
       </div>
       <div>
           {u.followed?<button onClick={()=>this.followAd(u.id)}>unFollow</button> : <button onClick={()=>this.unFollowAd(u.id)}>Follow</button> }
         
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
}