import classes from './dialogspage.module.css'
import { DialogItem } from './dialogsitem/dialogsitem'
import { MessagesItem } from './messagesitem/messagesitem'
import {ChangeEvent} from 'react';
import  { newMessageBodyAC,sendMessageAC} from '../../redux/store'
import { StoreType} from '../../redux/redux-store';
import { DialogsPage } from './dialogspage';


type PropsType={
    store:StoreType
}


export const DialogsPageContainer = (props:PropsType) =>{
    let state = props.store.getState();
   
    
    const addMessage = ( ) =>{ 
    props.store.dispatch(sendMessageAC())
    }

    const onChangeValueMessage =(text)=>{
       
      
       props.store.dispatch(newMessageBodyAC(text)) 
    }
    return (
              <DialogsPage  onChangeValueMessage={onChangeValueMessage} addMessage={addMessage} state={state}/>
    )
}