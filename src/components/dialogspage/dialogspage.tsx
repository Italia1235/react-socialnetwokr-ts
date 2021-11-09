import classes from './dialogspage.module.css'
import { DialogItem } from './dialogsitem/dialogsitem'
import { MessagesItem } from './messagesitem/messagesitem'
import {ChangeEvent} from 'react';
import  { newMessageBodyAC,sendMessageAC} from '../../redux/store'
import { AppStateType, StoreType} from '../../redux/redux-store';


type PropsType={
    state:AppStateType
    addMessage:()=>void
    onChangeValueMessage:(text:string)=>void
}


export const DialogsPage = (props:PropsType) =>{
   
    let messagesElemets = props.state.dialogsPage.dialogsData.map(t=>(<MessagesItem id={t.id} message={t.name}/>))
    let dialogsElements = props.state.dialogsPage.messagesData.map(e=>( <DialogItem  id={e.id} name={e.message}/>))
    
    const callbackAddMessage = ( ) =>{ 
    props.addMessage()
    }

    const onChangeValueMessageCallback =(e:ChangeEvent<HTMLInputElement>)=>{
       
      
      props.onChangeValueMessage((e.currentTarget.value)) 
    }
    return (
        <div className={classes.dialogsArea}>
        <div>{dialogsElements} </div>
        <div>{messagesElemets} </div>
<input value={props.state.dialogsPage.newMessageBody} placeholder="enter your message" onChange={onChangeValueMessageCallback} ></input>
<div><button onClick={callbackAddMessage}>Отправить</button></div>
        </div>
    )
}