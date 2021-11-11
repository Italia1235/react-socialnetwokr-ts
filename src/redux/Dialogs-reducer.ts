import { ActionsTypes,dialogsType, messagesType } from './store';

const initialState:InitialStateType = {
   
        dialogsData :[
            {id:1,name:"Paul"},
            {id:2,name:"Alex"},
            {id:3,name:"Shon"}
       ],
        messagesData: [
            {id:1,message:"How are you,budy"},
            {id:2,message:"Whats up bro?"},
            {id:3,message:"You free today??"},],
        newMessageBody: "" 
    
}

type InitialStateType = {
    dialogsData: dialogsType[]
    messagesData: messagesType[]
    newMessageBody:string
}
export const dialogsReducer = (state = initialState,action:ActionsTypes):InitialStateType =>{ 

    switch(action.type){

    case "SEND-MESSAGE":
            
     return {...state,messagesData:[
         ...state.messagesData,{id:6,message:state.newMessageBody}],
         newMessageBody:""}

    case "UPDATE-NEW_MESSAGE_TEXT":

        return {...state,newMessageBody:action.newText}
        default:return state

    }

   
}