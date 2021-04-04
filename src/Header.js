import React from 'react';
import "./Header.css";
import EcoIcon from '@material-ui/icons/Eco';
import Avatar from '@material-ui/core/Avatar';
import {useStateValue} from "./StateProvider";
function Header() {
    const [{user},dispatch]=useStateValue();
  
    return (
        <div className="header">
           <div className="header_left">
               <EcoIcon className="logo"/>
           </div>
           <div className="header_middle">
               <h1>LeafTinker</h1>
           </div>
           <div className="header_right">
               <Avatar alt="" src={user.photoURL} />
               <h4>{user.displayName}</h4>
               <a href="">SignOut</a>
           </div>
        </div>
    )
}

export default Header
