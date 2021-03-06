import React from "react"
import {Switch,Route,withRouter,Redirect} from "react-router-dom"
import {connect} from "react-redux";
import Authform from "./Auth/authform";
import Intro from "./Auth/intro";
import {authUser} from "../store/actions/auth"
import {removeError} from "../store/actions/error"
import Codespace from './Editors/codespace'
import Homepage from "./Home/homepage";
import CollabEditor from "./Editors/collabEditor";
import About from './About/about'
const Main= props =>{
    var {currentUser}=props;
    return(
        <div className>
            <Switch>
    <Route exact path="/" render={props => <Homepage  currentUser={currentUser} {...props}/>}></Route>
    <Route exact path="/register" render={props => <Intro {...props} isSignup={true}/> }></Route>
    <Route exact path="/login" render={props => <Intro {...props} isSignup={false}/> }></Route>
    <Route exact path="/editor" render={props => <Codespace {...props}/>}></Route>
    <Route exact path="/about" render={props => <About {...props}/>}></Route>
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