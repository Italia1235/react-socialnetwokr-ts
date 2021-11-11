import  { DialogsPageType, newMessageBodyAC,sendMessageAC} from '../../redux/store'
import { DialogsPage } from './dialogspage';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';

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

const mapDispatchToProps=(dispatch:Dispatch)=>{
    debugger
    return{
        
        onChangeValueMessage:(text)=>{ dispatch(newMessageBodyAC(text))},
        addMessage:()=>{dispatch(sendMessageAC())}
    }
}

export const DialogsPageContainer = connect(mapStateToProps,mapDispatchToProps)(DialogsPage)