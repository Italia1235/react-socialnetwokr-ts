import { ActionsTypes, ProfilePageType } from "./store"


const initialState ={
        postData : [
            {id:1, post: "I learn React! ", likesCount:12},
            {id:2, post: "I like my mother :3",likesCount:1 }, ],
            newPostText: ""
}


export const profileReducer = (state = initialState,action:ActionsTypes):ProfilePageType=>{ 

    switch(action.type)
    {
    case "ADD-POST":  
   return {...state,postData:[...state.postData,
    { id:5,  post: state.newPostText, likesCount:0}
],newPostText:""}
 
      case "UPDATE-NEW-POST":  
    return {...state,newPostText:action.newText}

default: return  state 

    }
}

