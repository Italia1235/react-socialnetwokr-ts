export type postDataType = {
    postData:Array<postType>
}
export type dialogsDataType = {
    dialogsData: dialogsType[]
}
export type messagesDataType ={messagesData: messagesType[]}
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
export type  stateType={
    postData:postDataType
    dialogsData:dialogsDataType
    messagesData:messagesDataType
}




let state = {
    postData : [
        {id:1, post: "I learn React! ", likesCount:12},
        {id:2, post: "I like my mother :3",likesCount:1 },
    ],
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


export default state