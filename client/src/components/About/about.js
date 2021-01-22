import React from 'react'
import AboutImg from '../../assets/aboutus.png'
import './about.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        <div className="aboutus">
            <img src={AboutImg} height="400px" width="600px" />
            <div style={{height:"20px"}}></div>
            <div>
                <h3>SnipBit</h3>
                <br/>
                <p>
                <FontAwesomeIcon icon={faStar} />{" SnipBit allows you to save your code snippets all at one place."}<br/>
                <FontAwesomeIcon icon={faStar} />{" Access all your web development code snippets from one place." }<br/>
                <FontAwesomeIcon icon={faStar}/> {" Collaborate with your friends in real time "}<br/>
                <FontAwesomeIcon icon={faStar} />{" Easy access, editing and colab, anytime, anyplace."}<br/>
                </p>
            </div>
            
        </div>
    )
}
