import  { DialogsPageType, newMessageBodyAC,sendMessageAC} from '../../redux/store'
import { DialogsPage } from './dialogspage';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType ={
    dialogsPage:DialogsPageType
}

export type DialogsPropsType =  MapStateToPropsType & MapDispatchPropsType
type MapDispatchPropsType ={
    onChangeValueMessage:(text:string)=>void
    addMessage: ()=>void}

 const mapStateToProps = (state:AppStateType) => { 
return{
    dialogsPage:state.dialogsPage
}
}


export const DialogsPageContainer = connect(mapStateToProps,{ 
    onChangeValueMessage:newMessageBodyAC,
    addMessage:sendMessageAC})(DialogsPage)