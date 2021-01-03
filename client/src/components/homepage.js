import React from 'react'
import Home from './home';
import Intro from './intro'
import {Switch,Route,withRouter,Redirect,Link} from "react-router-dom"
import {connect} from 'react-redux'
function Homepage({currentUser}) {
    if(!currentUser.isAuth){
        return(
        <div className="">
            <Intro isSignup={false}/>
        </div>
        )
    }else{
    return (
        <Home />
    )
    }
}
export default withRouter(connect(null,null)(Homepage));
