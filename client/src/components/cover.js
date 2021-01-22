import React, { useEffect } from 'react'
import {Switch,Route,withRouter,Redirect,Link,useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import './cover.css'
import Logo from '../assets/logo-removebg.png'
import Parallax from 'parallax-js'
function Cover() {

    useEffect(()=>{
        // Parallax Code
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);
      },[])
    
    return (
        <div className="cover">

    <nav>
        <div class="menu">
            <p class="website_name"><img height="120px" width="120px" src={Logo}></img></p>
        </div>
    </nav>

    <section class="wrapper">

        <div class="container">

            <div id="scene" class="scene" data-hover-only="false">


                <div class="circle" data-depth="1.2"></div>

                <div class="one" data-depth="0.9">
                    <div class="content">
                        <span class="piece"></span>
                        <span class="piece"></span>
                        <span class="piece"></span>
                    </div>
                </div>

                <div class="two" data-depth="0.60">
                    <div class="content">
                        <span class="piece"></span>
                        <span class="piece"></span>
                        <span class="piece"></span>
                    </div>
                </div>

                <div class="three" data-depth="0.40">
                    <div class="content">
                        <span class="piece"></span>
                        <span class="piece"></span>
                        <span class="piece"></span>
                    </div>
                </div>

                <p class="p404" data-depth="0.50">SnipBit</p>
                <p class="p404" data-depth="0.10">SnipBit</p>

            </div>

            <div class="text">
                <article>
                    <p>The one stop shop for web developers to save and share their code snippets!</p>
                    <Link to="/register">
                        <button>Lets get started!</button>
                    </Link>
                </article>
            </div>

        </div>
    </section>
        </div>
    )
}


export default withRouter(connect(null,null)(Cover));