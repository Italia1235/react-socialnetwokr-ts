import classes from './dialogspage.module.css'
import { DialogItem } from './dialogsitem/dialogsitem'
import { MessagesItem } from './messagesitem/messagesitem'
import {ChangeEvent} from 'react';
import  {newMessageBodyAC,sendMessageAC,StoreType, store} from '../../redux/state'


type PropsType={
    store:StoreType
}


export const DialogsPage = (props:PropsType) =>{
  
    let state = props.store.getState().dialogsPage;
  
    let messagesElemets = state.dialogsData.map(t=>(<MessagesItem id={t.id} message={t.name}/>))
    let dialogsElements = state.messagesData.map(e=>( <DialogItem  id={e.id} name={e.message}/>))
    
    const addMessage = ( ) =>{ 
   store.dispatch(sendMessageAC())
  
    }

    const onChangeValueMessage =(e:ChangeEvent<HTMLInputElement>)=>{
       
      
       props.store.dispatch(newMessageBodyAC(e.currentTarget.value)) 
    }
    return (
        <div className={classes.dialogsArea}>
        <div>{dialogsElements} </div>
        <div>{messagesElemets} </div>




<input value={props.store.getState().dialogsPage.newMessageBody} placeholder="enter your message" onChange={onChangeValueMessage} ></input>
<div><button onClick={addMessage}>Отправить</button></div>

        </div>
    )
}