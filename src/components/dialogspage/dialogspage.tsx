import classes from './dialogspage.module.css'

import { DialogItem } from './dialogsitem/dialogsitem'
import { MessagesItem } from './messagesitem/messagesitem'
import {dialogsDataType, messagesDataType} from "../../redux/state";


type PropsType={
    dialogsData: dialogsDataType
    messagesData: messagesDataType
}



export const DialogsPage = (props:PropsType) =>{

    let messagesElemets = props.messagesData.map(t=>(<MessagesItem id={t.id} message={t.message}/>))

    let dialogsElements = props.dialogsData.map(e=>( <DialogItem  id={e.id} name={e.name}/>))

    return (
        <div className={classes.dialogsArea}>

 <div>{dialogsElements} </div>

<div>{messagesElemets} </div>
        </div>
    )
}