import { useState } from "react"

export default function ATSReplaceComponent(){
    const [text, setText]=useState("")
    const submitHandler = () => {
        console.log(text)
    }
    return(
        <div>
            <textarea rows="4" cols="50" onChange={()=>setText(e.target.value)}>
            </textarea>
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}