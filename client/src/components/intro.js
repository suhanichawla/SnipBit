import React from 'react'
import './main.css';
import Logo from '../assets/logo.png'
import Authform from './Auth/authform';

export default function Intro(props) {
    var {isSignup}=props;
    return (
        <div className="main-body">
            <img className="main-image" src={Logo} />
            {isSignup ? (
                <Authform {...props} isSignup={true} buttonText="REGISTER" toggleMessage="Already have an account? " toggleMessageU="Sign in"/>)
                :
               ( <Authform isSignup={false} buttonText="LOGIN" toggleMessage="Don't have an account? " toggleMessageU="Create one!"/>
            )}
            
        </div>
        
    )
}
