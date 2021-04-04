import React,{useState,useEffect} from 'react'
import LeftRow from "./LeftRow.js"
import "./LeftBar.css"
import db from "./firebase";
import LeftBarInput from "./LeftBarInput"
function LeftBar() {
    const [newsarticles,setNewsarticles]=useState([]);

    useEffect(() => {
        db.collection('newsarticles')
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>{
            setNewsarticles(snapshot.docs.map((doc) => ({id:doc.id,data:doc.data()}))
            );
        });
    }, []);
    
    return (
        <div className="leftbar">
          <div className="leftbar_form">
            <LeftBarInput/>
            <h1>Some Trending News</h1>
          </div>
          <div className="article">
            {newsarticles.map((newsarticle)=>{
              return(
                <LeftRow 
                 key={newsarticle.id}
                 ID={newsarticle.id}
                 image={newsarticle.data.imageURL} 
                 text={newsarticle.data.text} 
                 link={newsarticle.data?.link}
                 timestamp={newsarticle.data.timestamp}/>
              );
          })
          }
          </div>
        </div>   
    )
}

export default LeftBar
