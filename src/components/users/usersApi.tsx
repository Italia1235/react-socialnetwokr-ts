import {UsersType} from "../../redux/users-reducer"
import React from 'react'
import { Users } from "./users"
import { Preloader } from "../common/Preloader/Preloader"
import { usersAPI } from "../../api/api"

interface UsersProps {
    users:UsersType[]
    usersCount:number
    pageSize:number
    currentPage:number
    isLoading: boolean
    disableButton:number[]
    follow: (userId:number)=>void
    unfollow:(userId:number)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    isLoadingStart:(isLoading) =>void
    setUser:(users:UsersType[])=>void
    disableButtonAC:(disable,userId)=>void
}

  export class UsersApi extends React.Component<UsersProps> { 
            followAd = (userId:number)=>{
            this.props.follow(userId)
          }
           unFollowAd = (userId:number)=>{
              this.props.unfollow(userId)
          }

    componentDidMount() {        
     this.props.isLoadingStart(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data =>{
            this.props.isLoadingStart(false)
            this.props.setUser(data.items)
            this.props.setTotalUsersCount(data.totalCount)
    })
}   
onPageChanged = (page:number)=>{
    this.props.isLoadingStart(true)
    this.props.setCurrentPage(page)
    usersAPI.getUsers(page,this.props.pageSize).then(data =>{
            this.props.setUser(data.items)
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
                    disableButtonAC={this.props.disableButtonAC}
                    disableButton = {this.props.disableButton}
        /> </>
    }
}