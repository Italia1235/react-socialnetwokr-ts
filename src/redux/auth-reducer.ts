import { Dispatch } from "redux"
import { autCont } from "../api/api"

export const initialState:initialAuthStatetype ={ 
    userId:null,
    email:null,
    login:null,
    isAuth:false
}
export type initialAuthStatetype = {
    userId:string|null
    email:string|null
    login:string|null
    isAuth:boolean
 }

export type AuthSetAcType = ReturnType<typeof AuthSetAc>
 
export type ActionType = AuthSetAcType

export const authReducer =(state=initialState,action:ActionType):initialAuthStatetype => { 

    switch(action.type){
  case "AUTH-SET-USER":
      return {...state,...action.data,isAuth:true}

        default:return{...state}
    }
}


export const AuthSetAc = (userId,login,email) => ({type:"AUTH-SET-USER",data:{userId,login,email}}) as const

export const AuthSetThunkCreator = () => 
{
    return (dispatch:Dispatch) => 
    {
        autCont()
    .then(res =>
        {
        if(res.data.resultCode===0)
        {
       let {id,login,email} = res.data.data
          dispatch(AuthSetAc(id,login,email))
        }})}}
          
          
    
    
