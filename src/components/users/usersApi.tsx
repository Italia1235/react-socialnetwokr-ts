import axios from "axios"
import {UsersType} from "../../redux/users-reducer"
import styles from './users.module.css'
import userPhoto from '../../pic/avatar.jpg'
import React from 'react'
import { Users } from "./users"

interface UsersProps {
    users:UsersType[]
    usersCount:number
    pageSize:number
    currentPage:number
    follow: (userId:number)=>void
    unfollow:(userId:number)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    setUser:any}

  export class UsersApi extends React.Component<UsersProps> { 
    
         followAd = (userId:number)=>{
            this.props.follow(userId)
          }
           unFollowAd = (userId:number)=>{
              this.props.unfollow(userId)
          }

    componentDidMount() {        
         axios.
            get(`https://social-network.samuraijs.com/api/1.0/users?page=
            ${this.props.currentPage}&count=${this.props.pageSize}`).then(res =>{
            this.props.setUser(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
    })
}   
onPageChanged = (p:number)=>{
    this.props.setCurrentPage(p)
    axios.
            get(`https://social-network.samuraijs.com/api/1.0/users?page=
            ${p}&count=${this.props.pageSize}`).then(res =>{
            this.props.setUser(res.data.items)
    })
}

    render (){
        return <Users usersCount={this.props.usersCount}
                    pageSize={this.props.pageSize }
                    onPageChanged = {this.onPageChanged}
                    follow={this.followAd}
                    unFollow={this.unFollowAd}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
        />
    }
}