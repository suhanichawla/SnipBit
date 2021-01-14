import React from "react"
import {Switch,Route,withRouter,Redirect} from "react-router-dom"
import {connect} from "react-redux";
import Authform from "./Auth/authform";
import Intro from "./intro";
import Editor from './editor';
import Home from './home'
import {authUser} from "../store/actions/auth"
import {removeError} from "../store/actions/error"
import Codespace from './codespace'
import Homepage from "./homepage";
import CollabEditor from "./collabEditor";
const Main= props =>{
    var {currentUser}=props;
    return(
        <div className>
            <Switch>
    <Route exact path="/" render={props => <Homepage  currentUser={currentUser} {...props}/>}></Route>
    <Route exact path="/register" render={props => <Intro {...props} isSignup={true}/> }></Route>
    <Route exact path="/editor" render={props => <Codespace {...props}/>}></Route>
    <Route exact path="/editorCollab/:id" render={props => <CollabEditor {...props}/>}></Route>
            </Switch>
        </div>
    )
}
function mapStateToProps(state){
    return({
        currentUser:state.currentUser,
        errors:state.errors

    })
}


export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));