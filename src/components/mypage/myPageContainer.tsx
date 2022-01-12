import React from 'react'
import { MyPage } from './mypage';
import { connect } from "react-redux";
import { ProfilePageType, getProfileThunkCreator, setUserMyPageAC } from '../../redux/Profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';

export type MapProfilePageType =  MapStateToPropsType & MapDispatchPropsType
type MapStateToPropsType ={
        profile:ProfilePageType
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
    profile:state.profilePage.profile})

 const WithUrlMyPageContComponent = withRouter(MyPageContainer)

 export default connect (mapStateToProps,{setUserMyPageAC,getProfileThunkCreator}) (WithUrlMyPageContComponent)