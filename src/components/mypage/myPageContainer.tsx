import React from 'react'
import { MyPage } from './mypage';
import axios from 'axios';
import { connect } from "react-redux";
import { ProfilePageType, setUserMyPageAC } from '../../redux/Profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import { getProfile } from '../../api/api';
export type MapProfilePageType =  MapStateToPropsType & MapDispatchPropsType
type MapStateToPropsType ={
        profile:ProfilePageType
    }
type MapDispatchPropsType ={
        setUserMyPageAC:(profile)=>void
    }
type PathParamsType = {
    userId:string
}
type CommonPropsType =RouteComponentProps<PathParamsType>&MapProfilePageType


class MyPageContainer extends React.Component<CommonPropsType,{}>{
componentDidMount(){
    let userId = this.props.match.params.userId
    if(!userId){
        userId="2"
    }
    getProfile(userId)
         .then(res =>{
            this.props.setUserMyPageAC(res.data)
        
                     })}

    render(){
                   return <MyPage  {...this.props}/>    }
}
const mapStateToProps = (state)=>({
    profile:state.profilePage.profile})

 const WithUrlMyPageContComponent = withRouter(MyPageContainer)

 export default connect (mapStateToProps,{setUserMyPageAC}) (WithUrlMyPageContComponent)