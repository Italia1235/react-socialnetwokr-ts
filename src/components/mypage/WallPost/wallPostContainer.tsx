import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import  {AddPostActionCreator,changeNewTextAC, ProfilePageType} from "../../../redux/store";
import { WallPosts } from "./wallPosts";



type MapStateToPropsType ={
    profilePage:ProfilePageType
}

export type MapProfilePageType =  MapStateToPropsType & MapDispatchPropsType
type MapDispatchPropsType ={
    onPostChange:(text:string)=>void
    addPost: ()=>void
}

const mapStateToProps = (state:AppStateType )=>{
return{
    profilePage:state.profilePage
}
}


export const WallPostsContainer = connect(mapStateToProps,{
    onPostChange: changeNewTextAC,
    addPost:AddPostActionCreator
})(WallPosts)