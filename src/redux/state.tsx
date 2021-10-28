
let rerenderTree = ()=>{
    console.log(123)
}


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




export const state:stateType = {
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
}

export const addPost =()=>{
   const newPost: postType = {id:5, 
    post: state.profilePage.newPostText, likesCount:0}
   
   
    state.profilePage.postData.push(newPost)
    rerenderTree()
}




export const updateNewPostText = (newText:string)=>{
state.profilePage.newPostText=newText
rerenderTree()
}

export default state