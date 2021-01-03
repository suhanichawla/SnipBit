import React from 'react'
import './main.css';
import Logo from '../assets/logo.png'
import Authform from './Auth/authform';
import {authUser} from "../store/actions/auth"
import {removeError} from "../store/actions/error"
import {Switch,Route,withRouter,Redirect} from "react-router-dom"
import {connect} from "react-redux";

function Intro(props) {
    const {isSignup,authUser,errors,removeError,currentUser} = props;
    return (
        <div className="main-body">
            <img className="main-image" src={Logo} />
            {isSignup ? (
                <Authform onAuth={authUser} {...props} isSignup={true} buttonText="REGISTER" toggleMessage="Already have an account? " toggleMessageU="Sign in"/>)
                :
               ( <Authform onAuth={authUser} isSignup={false} buttonText="LOGIN" toggleMessage="Don't have an account? " toggleMessageU="Create one!"/>
            )}
            
        </div>
        
    )
}

function mapStateToProps(state){
    return({
        currentUser:state.currentUser,
        errors:state.errors

    })
}

export default withRouter(connect(mapStateToProps,{authUser,removeError})(Intro));