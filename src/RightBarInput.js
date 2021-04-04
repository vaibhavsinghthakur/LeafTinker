import React,{useState} from 'react'
import {Avatar} from "@material-ui/core";
import "./RightBarInput.css";
import db from "./firebase"
import firebase from "firebase"
import { useStateValue } from "./StateProvider";

function RightBarInput() {
    const [{ user }, dispatch] = useStateValue();
    const [input,setInput]=useState("")
    const [img,setImg]=useState("")
    
    const handleClick = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: img,
            email:user.email,
          });
          setInput("");
          setImg("");
    }
    return (
        <div className="rightbarinputpart">
            <div className="rightbar_input">
                <Avatar src={user.photoURL} alt=""/>
                <form>
                    <input
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        className="rightbar_text"
                        placeholder="comment"

                    />
                    <input 
                        value={img}
                        onChange={(e)=>setImg(e.target.value)}
                        className="rightbar_image_url"
                        placeholder="image_url"    
                    />
                    <button onClick={handleClick} type="submit" className="submitbutton">
                        Post
                    </button>
                </form>           
            </div>
       
        </div>
    )
}

export default RightBarInput
