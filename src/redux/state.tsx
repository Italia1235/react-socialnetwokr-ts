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
export type StoreType ={
    _state:stateType
    _callSubs:()=>void
    getState:()=>stateType
    dispatch:(action:ActionsTypes)=>void
}

type AddPostActionType = ReturnType <typeof AddPostActionCreator>
type ChangeNewText = ReturnType <typeof changeNewTextAC>
type UpdateNewMessageTextType = ReturnType <typeof newMessageBodyAC>
type SendMessageType = ReturnType <typeof sendMessageAC>
export type ActionsTypes = AddPostActionType|ChangeNewText|UpdateNewMessageTextType|SendMessageType

export const store ={
    _callSubs(){
        console.log("123")
    },

    _state :{
        profilePage:{
        postData : [
            {id:1, post: "I learn React! ", likesCount:12},
            {id:2, post: "I like my mother :3",likesCount:1 }, ],
            newPostText: ""
    },
        dialogsPage:
        {
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
    },
    getState()
    {
        return this._state
    },
           subscribe(observer){ 
            this._callSubs = observer
        },
        dispatch(action){
            if(action.type ==='ADD-POST')
            {
                const newPost: postType = {
                    id:5,  post: this._state.profilePage.newPostText, likesCount:0
                }
                    this._state.profilePage.postData.push(newPost)
                    this._state.profilePage.newPostText=''
                    this._callSubs()
            }
            else if (action.type ==="UPDATE-NEW-POST")
            {
                this._state.profilePage.newPostText=action.newText
                this._callSubs()
            }
            else if(action.type==="UPDATE-NEW_MESSAGE_TEXT"){
                
                this._state.dialogsPage.newMessageBody=action.newText
                this._callSubs()
                console.log(action.newText)
            }
            else if (action.type==="SEND-MESSAGE"){
                const body = {id:6,message:this._state.dialogsPage.newMessageBody}
                this._state.dialogsPage.newMessageBody=""
                this._state.dialogsPage.messagesData.push(body)
                this._callSubs()
                
            }
        }
}

export const AddPostActionCreator = () => ( {type:"ADD-POST"}) as const
export const changeNewTextAC = (newText)=>({type:"UPDATE-NEW-POST",newText:newText }) as const
export const sendMessageAC = () =>({type:"SEND-MESSAGE"}) as const
export const newMessageBodyAC = (newText)=>({type:"UPDATE-NEW_MESSAGE_TEXT",newText:newText}) as const
