import React from 'react'
import "./Login.css";
import EcoIcon from '@material-ui/icons/Eco';
import {auth,provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
    const [state,dispatch] = useStateValue();
    
    const signIn = () =>{
      auth
      .signInWithPopup(provider)
      .then((result) => {
         dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
         })
      })
      .catch(error => alert(error.message));
    };

    return (
        <div className="login">
          <div className="login_box">
            <div className="login_logo">
                <EcoIcon className="login_logo_icon"/>
                <h1>LeafTinker</h1>
            </div>
            <button className="login_button"type="submit" onClick={signIn}>
               Sign In
            </button>
          </div>  
        </div>
    )
}

export default Login
