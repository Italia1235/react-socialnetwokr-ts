import classes from './dialogspage.module.css'
import { DialogItem } from './dialogsitem/dialogsitem'
import { MessagesItem } from './messagesitem/messagesitem'
import {ChangeEvent} from 'react';
import  {ActionsTypes, newMessageBodyAC,sendMessageAC} from '../../redux/store'
import { AppStateType,StoreType} from '../../redux/redux-store';


type PropsType={
    store:StoreType
}


export const DialogsPage = (props:PropsType) =>{
    let state = props.store.getState();
    {console.log(state)}
    let messagesElemets = state.dialogsPage.dialogsData.map(t=>(<MessagesItem id={t.id} message={t.name}/>))
    let dialogsElements = state.dialogsPage.messagesData.map(e=>( <DialogItem  id={e.id} name={e.message}/>))
    
    const addMessage = ( ) =>{ 
    props.store.dispatch(sendMessageAC())
    }

    const onChangeValueMessage =(e:ChangeEvent<HTMLInputElement>)=>{
       
      
       props.store.dispatch(newMessageBodyAC(e.currentTarget.value)) 
    }
    return (
        <div className={classes.dialogsArea}>
        <div>{dialogsElements} </div>
        <div>{messagesElemets} </div>
<input value={state.dialogsPage.newMessageBody} placeholder="enter your message" onChange={onChangeValueMessage} ></input>
<div><button onClick={addMessage}>Отправить</button></div>
        </div>
    )
}