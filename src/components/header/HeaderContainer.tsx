import React from 'react'
import { connect } from 'react-redux'
import { Header } from './header'
import {AuthSetAc} from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import axios from 'axios'

export interface MapToPropsType {
    isAuth:boolean
    login:string|null
}
export interface MapDispatch {
    AuthSetAc:(userId,login,email)=>void
}

type PropsType = MapToPropsType& MapDispatch
class HeaderContainer extends React.Component<PropsType> {
componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
    {withCredentials:true})
    .then(res =>{
        if(res.data.resultCode===0){
       let {id,login,email} = res.data.data
          this.props.AuthSetAc(id,login,email)}
})
}

render() {
    return <Header {...this.props}/>
}
}

const mapStateToProps = (state:AppStateType)=>
({isAuth:state.auth.isAuth,login:state.auth.login
})

export default connect (mapStateToProps,{AuthSetAc}) (HeaderContainer)