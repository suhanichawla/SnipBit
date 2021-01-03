import React from 'react'
import './main.css';
import Logo from '../assets/logo.png'
import Authform from './Auth/authform';

export default function Main() {
    return (
        <div className="main-body">
            <img className="main-image" src={Logo} />
            <Authform/>
        </div>
    )
}
