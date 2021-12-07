import { connect } from "react-redux";
import { Dispatch } from "redux";
import { followAc, setCurrentPage, setTotalUsersCountAC, setUsersAC, unfollowAC, UsersType } from "../../redux/users-reducer";
import { UsersApi } from "./usersApi";

export type UsersPropsType =  MapStateToPropsType & MapDispatchPropsType

const mapStateToProps = (state) => { 
return{
    users:state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.totalCount,
    currentPage:state.usersPage.currentPage
}
}
export type MapStateToPropsType ={ 

    usersPage:UsersType[]
    pageSize:number
    usersCount:number
}
export type MapDispatchPropsType ={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUser:any
}

const mapDispatchToProps = (dispatch:Dispatch) =>{
return{
    follow: (userId) =>{
        dispatch(followAc(userId))
    },
    unfollow:(userId)=>{
        dispatch(unfollowAC(userId))
    },

    setUser: (users)=>{
        dispatch(setUsersAC(users))
    },
    setCurrentPage:(currentPage) =>{
        dispatch(setCurrentPage(currentPage))
    },
    setTotalUsersCount:(totalCount) =>{
        dispatch(setTotalUsersCountAC(totalCount))
    }

}
}

    export const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (UsersApi)