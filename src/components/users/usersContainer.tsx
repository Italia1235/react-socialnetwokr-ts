import { connect } from "react-redux";
import { Dispatch } from "redux";
import { followAc, setUsersAC, unfollowAC, UsersType } from "../../redux/users-reducer";
import { Users } from "./users";

export type UsersPropsType =  MapStateToPropsType & MapDispatchPropsType


const mapStateToProps = (state) => { 
return{
    users:state.usersPage.users
}
}
export type MapStateToPropsType ={ 

    usersPage:UsersType[]
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
    }

}
}

    export const UsersContainer = connect(mapStateToProps,mapDispatchToProps) (Users)