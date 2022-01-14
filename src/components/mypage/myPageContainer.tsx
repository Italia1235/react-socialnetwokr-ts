import React from 'react'
import { MyPage } from './mypage';
import { connect } from "react-redux";
import { ProfilePageType, getProfileThunkCreator, setUserMyPageAC } from '../../redux/Profile-reducer';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import { RedirectHOC } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

export type MapProfilePageType =  MapStateToPropsType & MapDispatchPropsType
type MapStateToPropsType ={
        profile:ProfilePageType
        isAuth:boolean
    }
type MapDispatchPropsType ={
        setUserMyPageAC:(profile)=>void
        getProfileThunkCreator:(userId)=>void
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
    this.props.getProfileThunkCreator(userId)
    }

    render(){
      
                   return <MyPage  {...this.props}/>    }
}



const mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    isAuth:state.auth.isAuth})

    



 export default  compose<React.ComponentType>
 (connect(mapStateToProps,{setUserMyPageAC,getProfileThunkCreator}),
 withRouter,RedirectHOC)(MyPageContainer)