import React from 'react'
import './sidebar.css'
import Avatar from '../assets/avatar.jfif'
import {Link} from 'react-router-dom';
import {logout} from '../store/actions/auth'
import {Switch,Route,withRouter,Redirect} from "react-router-dom"
import {connect} from "react-redux";

function Sidebar(props) {
    function logout(){
        props.logout();
    }
    return (
        <>
        <div style={{width: "20%"}}>
            
            <header id="header">
            <div className="d-flex flex-column">

            <div className="profile">
                <img src={Avatar} alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="">Suhani Chawla</a></h1>
                <div className="social-links mt-3 text-center">
                </div>
            </div>

            <nav className="nav-menu">
                <ul>
                <li><a><i className="bx bx-home"></i><span> <Link to="/editor">New Snip</Link></span></a></li>
                <li><a><i className="bx bx-home"></i><span> <Link to="/about">About Us</Link></span></a></li>
                <li><a><i className="bx bx-file-blank"></i> <span onClick={()=>logout()}><Link>Logout</Link></span></a></li>

                </ul>
            </nav>
             <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

                </div>
            </header>
            
        </div>
        </>
    )
}

export default withRouter(connect(null,{logout})(Sidebar));