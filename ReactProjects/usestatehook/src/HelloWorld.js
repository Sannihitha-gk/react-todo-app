import { useState } from "react";
export default function HelloWorld(){
    const[name,setName]=useState("")
    return(
        <div style={{textAlign:"center",padding:"5px"}}>
            <input type="text" id="name" name="name"
            value={name}
            onChange={(e)=>setName(e,EventTarget.value)}/>
        <div> Hi{}</div>
        </div>
    )
}