import React from 'react'
import "./LeftRow.css"
import {useStateValue} from "./StateProvider";
import db from "./firebase";

function LeftRow({image,text,timestamp,ID,link}) {
    const [{user},dispatch]=useStateValue();

    function deleteNews(){
        if(user.email=="overcastvaibhav@gmail.com")
        {
          
        db.collection("newsarticles")
        .doc(ID)
        .delete()
        .then(function () {
        console.log("Document successfully deleted!");
        })
        .catch(function (error) {
        console.error("Error removing document: ", error);
        });
        }
    }

    return (
        <div className="leftrow">
            <img src={image} alt=""/>
            <h3>{text}</h3>
            <a href={link}>Click to Read more about this article...</a>
            <p onClick={deleteNews}>DATE : {new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
    )
}

export default LeftRow
