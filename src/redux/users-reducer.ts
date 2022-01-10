const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"

export type UsersType = {
    id:number
    photos:{
        small:string|undefined
        large:string|undefined
    }
    followed:boolean
    name:string
    status:string
   
}

const initialState:InitialStateType = {
        users :[],
        pageSize: 5,
        totalCount: 0,
        currentPage:1,
        isLoading: true,
        disableButton:[]
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
type setCurrentPage = {
    type:"SET-CURRENT-PAGE"
    currentPage:number
}
type setTotalUsersCount={
    type:'SET-TOTAL-COUNT',
    totalCount:number
}
type isPreloderingACType={
    type:'IS-PRELODING',
    isLoading:boolean
}
type disableButtonType = ReturnType <typeof disableButtonAC>

type ActionsType  = followAcType|unfollowACType|SetUsersType|setCurrentPage|setTotalUsersCount|isPreloderingACType|disableButtonType

type InitialStateType = {
  users:UsersType[]
  pageSize:number
  totalCount:number
  currentPage:number
  isLoading:boolean
  disableButton: number[]
}
export const userReducer = (state = initialState,action:ActionsType):InitialStateType =>{ 

    switch(action.type){
 case FOLLOW: return {...state,users:[...state.users].map(u=>{if(u.id===action.userId){return {...u,followed:true} } return u })}

 case UNFOLLOW:return {...state,users:[...state.users].map(u=>{
    if(u.id===action.userId){
       return {...u,followed:false}
    }
   return u
})}

case SETUSERS: 
return {...state,users:[...action.users]}
case "SET-CURRENT-PAGE":
    return {...state,currentPage:action.currentPage}
case"SET-TOTAL-COUNT":
return {...state,totalCount:action.totalCount}

case"IS-PRELODING":
return { ...state,isLoading:action.isLoading}

case"DISABLE-BUTTON":
return {
    ...state,
    disableButton: action.disable?
[...state.disableButton,action.userId]:
state.disableButton.filter(el=> el !== action.userId)
}


 default:return state

}   
}

export const followAc = (userId) => ({type:FOLLOW,userId})
export const unfollowAC = (userId)=> ({type:UNFOLLOW,userId})
export const setUsersAC = (users:UsersType[]) => ({type:SETUSERS,users})
export const setCurrentPageAC = (currentPage) => ({type:"SET-CURRENT-PAGE",currentPage})
export const setTotalUsersCountAC = (totalCount) =>({type:'SET-TOTAL-COUNT',totalCount})
export const isPreloderingAC = (isLoading) =>({type:'IS-PRELODING',isLoading})
export const disableButtonAC = (disable,userId) =>({type:"DISABLE-BUTTON",disable, userId} as const)