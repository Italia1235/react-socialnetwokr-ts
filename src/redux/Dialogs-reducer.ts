import { ActionsTypes, DialogsPageType } from './store';

const initialState = {
   
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

export const dialogsReducer = (state = initialState,action:ActionsTypes):DialogsPageType =>{ 

    switch(action.type){

    case "SEND-MESSAGE":
        const body = {id:6,message:state.newMessageBody}
                state.newMessageBody=""
                state.messagesData.push(body)
                return state
    

    case "UPDATE-NEW_MESSAGE_TEXT":
     
        state.newMessageBody=action.newText
        return state


        default:return state

    }

   
}