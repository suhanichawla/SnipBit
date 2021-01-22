import React from 'react'
import Home from './home';
import Intro from '../Auth/intro'
import {Switch,Route,withRouter,Redirect,Link} from "react-router-dom"
import {connect} from 'react-redux'
import Cover from '../coverPage';
function Homepage({currentUser}) {
    if(!currentUser.isAuth){
        return(
        <div className="">
            <Cover />
            {/* <Intro isSignup={false}/> */}
        </div>
        )
    }else{
        console.log("this is getting checked")
    return (
        <Home />
    )
    }
}
export default withRouter(connect(null,null)(Homepage));
