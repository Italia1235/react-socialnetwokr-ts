import { AppStateType } from "../../../redux/redux-store";
import  {AddPostActionCreator,changeNewTextAC,ActionsTypes} from "../../../redux/store";
import { WallPosts } from "./wallPosts";


type propsType =
    {
 state:AppStateType
       dispatch:(action:ActionsTypes)=>void
    }
export const WallPostsContainer = (props:propsType) => {

    let addPost = () =>
    {props.dispatch(AddPostActionCreator())}
    
    const onPostChange = (text)=>{
        if(text)
    props.dispatch(changeNewTextAC(text))
    }

   return ( 
<WallPosts updateNewPostText={onPostChange} addPost={addPost} state={props.state}/>
    )}

    