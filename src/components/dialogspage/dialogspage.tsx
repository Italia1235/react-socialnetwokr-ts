import classes from './dialogspage.module.css'
import { DialogItem } from './dialogsitem/dialogsitem'
import { MessagesItem } from './messagesitem/messagesitem'
import React, { RefObject } from 'react';
import state, {DialogsPageType} from '../../redux/state'


type PropsType={
    state: DialogsPageType
}


export const DialogsPage = (props:PropsType) =>{
  
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let messagesElemets = props.state.dialogsData.map(t=>(<MessagesItem id={t.id} message={t.name}/>))
 
    let dialogsElements = props.state.messagesData.map(e=>( <DialogItem  id={e.id} name={e.message}/>))

    const addMessage = ( ) =>{ 
   alert("ky")
    }
    return (
        <div className={classes.dialogsArea}>

 <div>{dialogsElements} </div>

<div>{messagesElemets} </div>




<textarea ref={newMessageElement}></textarea>
<div><button onClick={addMessage}>Отправить</button></div>

        </div>
    )
}