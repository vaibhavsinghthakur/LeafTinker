import React,{useState} from 'react'
import firebase from "firebase"
import db from "./firebase"
import { useStateValue } from "./StateProvider";

function LeftBarInput() {
    const [{ user }, dispatch] = useStateValue();    
    const [text,setText]=useState("")
    const [imageURL,setimageURL]=useState("")
    const [link,setLink]=useState("")
    const handleClick = (e) =>{
        e.preventDefault();
        db.collection("newsarticles").add({
            imageURL:imageURL,
            text:text,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            link:link,
        });
        setText("");
        setimageURL("");
        setLink("");
    }
    return (
        <div>
        {
            user.email=="overcastvaibhav@gmail.com" ? (
              <div style={{marginTop:"10px"}}>
              <form style={{display:"flex",flexDirection:"column"}}>
              <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder={"NEws"}
                    className="messageSender_input"
                />
                <input
                    placeholder="image URL"
                    value={imageURL}
                    onChange={(e) => setimageURL(e.target.value)}
                />
                <input
                   placeholder="Enter news article link"
                   value={link}
                   onChange={(e)=>setLink(e.target.value)
                   }
                />   
                <button onClick={handleClick} type="submit">
                    Handle submit
                </button>
                </form>
              </div>
            ):(
                <h1></h1>
            )
        }
        </div>
    )
}

export default LeftBarInput
