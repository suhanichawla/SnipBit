// import React from 'react'

// export default function navbar() {
//     return (
//         <div>
            
//         </div>
//     )
// }

import React,{Component} from "react"
import {Link,withRouter} from "react-router-dom"
import {connect} from "react-redux"
import './navbar.css'

import logo from '../assets/logowotext.png'
class Navbar extends Component{
    render(){
        console.log("path",this.props.location.pathname)
        return(
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo home" height="50px"/>
                    </Link>
                    </div>
                        <ul className="nav navbar-nav navbar-right">
                            <Link
                                to={`/`}
                            ><a onClick={()=>this.props.onSave()} href="#" className="btn btn-primary card-buttons nav-buttons">Save Snip</a>
                            </Link>
                            <Link
                                to={`/`}
                            ><a href="#" className="btn btn-primary card-buttons nav-buttons">Exit</a>
                            </Link>
                        </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps(reduxState){
    return {
        currentUser:reduxState.currentUser
    }
}

export default withRouter(connect(mapStateToProps,null)(Navbar));