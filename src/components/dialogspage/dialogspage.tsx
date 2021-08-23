import classes from './dialogspage.module.css'

import { DialogItem } from './dialogsitem/dialogsitem'
import { MessagesItem } from './messagesitem/messagesitem'


let dialogsData =[
    {id:1,name:"Paul"},
{id:2,name:"Alex"},
{id:3,name:"Shon"}
]


let messagesData=[
    {id:1,message:"How are you,budy"},

    {id:2,message:"Whats up bro?"},
    
    {id:3,message:"You free today??"},
]

let messagesElemets = messagesData.map(t=>(<MessagesItem id={t.id} message={t.message}/>))

let dilogsElemets =dialogsData.map(t=>(<DialogItem id={t.id} name={t.name}/>))

export const DialogsPage = () =>{ 

    return (
        <div className={classes.dialogsArea}>

{dilogsElemets}

{messagesElemets}
        </div>
    )
}