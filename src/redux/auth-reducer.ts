export const initialState:initialStatetype ={ 
    userId:null,
    email:null,
    login:null,
    isAuth:true
}
export type initialStatetype = {
    userId:string|null
    email:string|null
    login:string|null
    isAuth:boolean
 }

export type AuthSetAcType = ReturnType<typeof AuthSetAc>
 
export type ActionType = AuthSetAcType

export const authReducer =(state=initialState,action:ActionType):initialStatetype => { 

    switch(action.type){
  case "AUTH-SET-USER":
      return {...state,...action.data,isAuth:true}

        default:return{...state}
    }
}


export const AuthSetAc = (userId,login,email) => ({type:"AUTH-SET-USER",data:{userId,login,email}}) as const