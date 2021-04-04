import React from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import {useStateValue} from "./StateProvider";
import db from "./firebase";
function Post({profilePic,image,username,timestamp,message,ID,email}) {
    const [{user},dispatch]=useStateValue();
     
    function deleted() {
        if (email === user.email || user.email==="overcastvaibhav@gmail.com") {
        db.collection("posts")
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
        <div className="post">
            <div className="post_top">
             <div className="post_top_detail">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
             </div>
             {email === user.email || user.email==="overcastvaibhav@gmail.com" ?
             <DeleteIcon onClick={deleted} className="post_delete"/>:<h1></h1>}
            </div>
            <div className="post_bottom">
               <p>{message}</p>
            </div>
            <div className="post_image">
               <img src={image} alt=""/>
            </div>
            <div className="post_options">
                <div className="post_option">
                   <ThumbUpAltIcon style={{color:"#eb596e"}}/>
                   <p>Like</p>
                </div>
                <div className="post_option">
                   <ShareIcon style={{color:"#00af91"}}/>
                   <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
