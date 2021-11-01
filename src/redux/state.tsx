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
 }

export type  stateType={
    profilePage: ProfilePageType,
    dialogsPage:DialogsPageType
    
}

export type StoreType ={
    _state:stateType
    _callSubs:()=>void
    dispatch:(action:ActionsTypes)=>void
}

type AddPostActionType = {
    type:'ADD-POST'
}
type ChangeNewText = {
    type:"UPDATE-NEW-POST"
    newText : string
}

export type ActionsTypes = AddPostActionType|ChangeNewText

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
    
            {id:3,message:"You free today??"},
        ]
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
                const newPost: postType = {id:5, 
                    post: this._state.profilePage.newPostText, likesCount:0}
                    this._state.profilePage.postData.push(newPost)
                    this._state.profilePage.newPostText=''
                    this._callSubs()
            }
            else if (action.type ="UPDATE-NEW-POST")
            {
                this._state.profilePage.newPostText=action.newText
                this._callSubs()
            }
        }
}



