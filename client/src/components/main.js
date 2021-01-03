import React from "react"
import {Switch,Route} from "react-router-dom"
import Authform from "./Auth/authform";
import Intro from "./intro";
import Editor from './editor';
import Home from './home'
import Codespace from './codespace'
const Main= props =>{
    return(
        <div className>
            <Switch>
    <Route exact path="/" render={props => <Intro {...props} isSignup={false}/>}></Route>
    <Route exact path="/register" render={props => <Intro {...props} isSignup={true}/> }></Route>
    <Route exact path="/home" render={props => <Home {...props}/>}></Route>
    <Route exact path="/editor" render={props => <Codespace {...props}/>}></Route>
            </Switch>
        </div>
    )
}

export default Main;
// withRouter(connect(mapStateToProps,{logout})(Navbar));