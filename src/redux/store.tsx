export type postType = {
    id:number,
    post:string,
    likesCount:number
}
export type messagesType={
    id:number,
    message:string
}
export type dialogsType={
    id:number,
    name:string
}
export type ProfilePageType = { 
    postData: postType[];
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: dialogsType[]
    messagesData: messagesType[]
    newMessageBody:string
    
 }
export type  stateType={
    profilePage: ProfilePageType,
    dialogsPage:DialogsPageType
}

type AddPostActionType = ReturnType <typeof AddPostActionCreator>
type ChangeNewText = ReturnType <typeof changeNewTextAC>


type UpdateNewMessageTextType = ReturnType <typeof newMessageBodyAC>
type SendMessageType = ReturnType <typeof sendMessageAC>
export type ActionsTypes = AddPostActionType|ChangeNewText|UpdateNewMessageTextType|SendMessageType




export const sendMessageAC = () =>({type:"SEND-MESSAGE"}) as const
export const newMessageBodyAC = (newText)=>({type:"UPDATE-NEW_MESSAGE_TEXT",newText:newText}) as const
export const AddPostActionCreator = () => ( {type:"ADD-POST"}) as const
export const changeNewTextAC = (newText)=>({type:"UPDATE-NEW-POST",newText:newText }) as const