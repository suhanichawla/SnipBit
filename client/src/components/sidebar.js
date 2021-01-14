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
        <div style={{width: "20%"}}>
            <header id="header">
            <div className="d-flex flex-column">

            <div className="profile">
                <img src={Avatar} alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="">Suhani Chawla</a></h1>
                <div className="social-links mt-3 text-center">
                <a target="_blank" href="https://twitter.com/SuhaniChawla9" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a target="_blank" href="https://www.instagram.com/suhani1746/" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a target="_blank" href="mailto:suhanichawla2000@gmail.com" className="instagram"><i className="bx bx-mail-send"></i></a>
                <a target="_blank" href="https://github.com/suhanichawla" className="instagram"><i className="bx bxl-github"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/suhani-chawla-891919171/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>

            <nav className="nav-menu">
                <ul>
                <li className="active"><a href="#hero"><i className="bx bx-home"></i><span> <Link to="/editor">New Snip</Link></span></a></li>
                <li><a href="#about"><i className="bx bx-user"></i> <span>My Snips</span></a></li>
                <li><a href="#skills"><i className="bx bx-book-content"></i> <span>Skills</span></a></li>
                <li><a href="#services"><i className="bx bx-server"></i> Projects</a></li>
                <li><a href="#resume"><i className="bx bx-file-blank"></i> <span onClick={()=>logout()}>Logout</span></a></li>

                </ul>
            </nav>
             <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

                </div>
            </header>
            
        </div>
    )
}

export default withRouter(connect(null,{logout})(Sidebar));