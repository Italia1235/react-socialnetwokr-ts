import React from 'react'
import { MyPage } from './mypage';
import axios from 'axios';
import { connect } from "react-redux";
import { ProfilePageType, setUserMyPageAC } from '../../redux/Profile-reducer';
export type MapProfilePageType =  MapStateToPropsType & MapDispatchPropsType
type MapStateToPropsType ={
        profilePage:ProfilePageType
    }
    type MapDispatchPropsType ={
        setUserMyPageAC:(profile)=>void
    }


class MyPageContainer extends React.Component{
componentDidMount(){
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/20`)
         .then(res =>{
            setUserMyPageAC(res.data)
                     })}

    render(){
                   return <MyPage  {...this.props}/>    }
}
const mapStateToProps = (state)=>({
    profile:state.profilePage.profile})

 export default connect (mapStateToProps,{setUserMyPageAC}) (MyPageContainer)