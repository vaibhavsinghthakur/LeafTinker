import React,{useState,useEffect} from 'react'
import RightBarInput from "./RightBarInput";
import Post from "./Post";
import "./RightBar.css";
import db from "./firebase";
function RightBar() {
    const [posts,setPosts]=useState([]);
 
    useEffect(() => {
        db.collection('posts')
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>{
            setPosts(snapshot.docs.map((doc) => ({id:doc.id,data:doc.data()}))
            );
        });
    }, []);

    return (
        <div className="rightbar">
           <RightBarInput/>
           {posts.map((post) => {
               return (
                <Post
                    key={post.id}
                    ID={post.id}
                    email={post.data.email}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
                );
           })}
        </div> 
    )
}

export default RightBar
