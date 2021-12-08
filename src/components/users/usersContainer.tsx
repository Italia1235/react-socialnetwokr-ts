import { connect } from "react-redux";
import { followAc, isPreloderingAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UsersType } from "../../redux/users-reducer";
import { UsersApi } from "./usersApi";

export type UsersPropsType =  MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state) => { 
return{
    users:state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.totalCount,
    currentPage:state.usersPage.currentPage,
    isLoading:state.usersPage.isLoading
}
}
export type MapStateToPropsType ={ 
    usersPage:UsersType[]
    pageSize:number
    usersCount:number
    isLoading:boolean
}
export type MapDispatchPropsType ={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUser:any
    isLoadingStart:(isLoading) =>void
}



    export const UsersContainer = connect
    (mapStateToProps,{follow: followAc,
                      unfollow:unfollowAC,
                      setUser: setUsersAC,
                      setCurrentPage:setCurrentPageAC,
                      setTotalUsersCount:setTotalUsersCountAC,
                      isLoadingStart: isPreloderingAC}
) (UsersApi)