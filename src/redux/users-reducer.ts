const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"

export type UsersType = {
    id:number
    photos:{
        small:string|undefined
        large:string|undefined
    }
    followed:boolean,
    name:string,
    status:string
}

const initialState:InitialStateType = {
        users :[],
        pageSize: 5,
        totalCount: 0,
        currentPage:1,
        isLoading: true
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

type ActionsType  = followAcType|unfollowACType|SetUsersType|setCurrentPage|setTotalUsersCount|isPreloderingACType

type InitialStateType = {
  users:UsersType[]
  pageSize:number
  totalCount:number
  currentPage:number
  isLoading:boolean
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
 default:return state

}   
}

export const followAc = (userId) => ({type:FOLLOW,userId})
export const unfollowAC = (userId)=> ({type:UNFOLLOW,userId})
export const setUsersAC = (users:UsersType[]) => ({type:SETUSERS,users})
export const setCurrentPageAC = (currentPage) => ({type:"SET-CURRENT-PAGE",currentPage})
export const setTotalUsersCountAC = (totalCount) =>({type:'SET-TOTAL-COUNT',totalCount})
export const isPreloderingAC = (isLoading) =>({type:'IS-PRELODING',isLoading})