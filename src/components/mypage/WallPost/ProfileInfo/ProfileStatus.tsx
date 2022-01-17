import { useState } from "react"

export const ProfileStatus =() =>{

    const [profileStatus,changeStatus] = useState<string>("123123")
    const [editMode,changeEditMode] = useState<boolean>(false)

const activateEditMode = () =>{ 
    changeEditMode(true)
}

const deactivateEditMode = () =>{ 
    changeEditMode(false)
}
    return(
        <div style= {{padding:"10px"}}>
{editMode?  

<span> <input value ={profileStatus} autoFocus={true} onBlur={deactivateEditMode}/></span>:
<span  onDoubleClick = {activateEditMode}>{profileStatus}</span>
}


     </div>
        )    }