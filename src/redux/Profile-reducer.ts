import { ActionsTypes, postType, ProfilePageType } from "./store"


const initialState ={
        postData : [
            {id:1, post: "I learn React! ", likesCount:12},
            {id:2, post: "I like my mother :3",likesCount:1 }, ],
            newPostText: ""
}


export const profileReducer = (state = initialState,action:ActionsTypes):ProfilePageType=>{ 

    switch(action.type){

    case "ADD-POST":  
        const newPost: postType = {
            id:5,  post: state.newPostText, likesCount:0
    }
    state.postData.push(newPost)
    state.newPostText=''
return state


    case "UPDATE-NEW-POST":  
    state.newPostText=action.newText
    return state

default: return  state 

    }
}

