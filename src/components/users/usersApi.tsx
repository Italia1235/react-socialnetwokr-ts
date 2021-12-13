import axios from "axios"
import {UsersType} from "../../redux/users-reducer"
import React from 'react'
import { Users } from "./users"
import { Preloader } from "../common/Preloader/Preloader"
interface UsersProps {
    users:UsersType[]
    usersCount:number
    pageSize:number
    currentPage:number
    isLoading: boolean
    follow: (userId:number)=>void
    unfollow:(userId:number)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    isLoadingStart:(isLoading) =>void
    setUser:(users:UsersType[])=>void}

  export class UsersApi extends React.Component<UsersProps> { 
    
         followAd = (userId:number)=>{
            this.props.follow(userId)
          }
           unFollowAd = (userId:number)=>{
              this.props.unfollow(userId)
          }

    componentDidMount() {        
        this.props.isLoadingStart(true)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
            ${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials:true}).then(res =>{
            this.props.isLoadingStart(false)
            this.props.setUser(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
    })
}   
onPageChanged = (p:number)=>{
    this.props.isLoadingStart(true)
    this.props.setCurrentPage(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
            ${p}&count=${this.props.pageSize}`).then(res =>{
            this.props.setUser(res.data.items)
            this.props.isLoadingStart(false)
    })
}

    render (){
        return<> 
        {this.props.isLoading? <Preloader/>: null}
        <Users usersCount={this.props.usersCount}
                    pageSize={this.props.pageSize }
                    onPageChanged = {this.onPageChanged}
                    follow={this.followAd}
                    unFollow={this.unFollowAd}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
        /> </>
    }
}