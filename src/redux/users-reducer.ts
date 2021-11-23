const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"

export type UsersType = {
    id:number
    photoUrl:string
    followed:boolean,
    fullName:string,
    status:string
    location:{
        city:string
        country: string
    }
}


const initialState:InitialStateType = {
        users :[
        
        ]
}

type followAcType = {
    type: "FOLLOW"
    userId:number
}
type unfollowACType = {
    type:"UNFOLLOW"
    userId:number
}
type SetUsersType = {
    type:"SETUSERS"
    users:UsersType[]
}

type ActionsType  = followAcType|unfollowACType|SetUsersType


type InitialStateType = {
  users:UsersType[]
}
export const userReducer = (state = initialState,action:ActionsType):InitialStateType =>{ 

    switch(action.type){
 case FOLLOW: return {...state,users:[...state.users].map(u=>{if(u.id===action.userId){return {...u,followed:false} } return u })}

 case UNFOLLOW:return {...state,users:[...state.users].map(u=>{
    if(u.id===action.userId){
       return {...u,followed:true}
    }
   return u
})}

case SETUSERS: 
return {...state,users:[...state.users,...action.users]}

 default:return state
   
}

   
}


export const followAc = (userId) => ({type:FOLLOW,userId})
export const unfollowAC = (userId)=> ({type:UNFOLLOW,userId})
export const setUsersAC = (users) => ({type:SETUSERS,users})
