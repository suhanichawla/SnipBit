import React from 'react'
import './sidebar.css'
import Avatar from '../assets/avatar.jfif'

export default function Sidebar() {
    return (
        <div style={{width: "20%"}}>
            <header id="header">
            <div class="d-flex flex-column">

            <div class="profile">
                <img src={Avatar} alt="" class="img-fluid rounded-circle" />
                <h1 class="text-light"><a href="">Suhani Chawla</a></h1>
                <div class="social-links mt-3 text-center">
                <a target="_blank" href="https://twitter.com/SuhaniChawla9" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a target="_blank" href="https://www.instagram.com/suhani1746/" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a target="_blank" href="mailto:suhanichawla2000@gmail.com" class="instagram"><i class="bx bx-mail-send"></i></a>
                <a target="_blank" href="https://github.com/suhanichawla" class="instagram"><i class="bx bxl-github"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/suhani-chawla-891919171/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div>
            </div>

            <nav class="nav-menu">
                <ul>
                <li class="active"><a href="#hero"><i class="bx bx-home"></i> <span>New Snip</span></a></li>
                <li><a href="#about"><i class="bx bx-user"></i> <span>My Snips</span></a></li>
                <li><a href="#skills"><i class="bx bx-book-content"></i> <span>Skills</span></a></li>
                <li><a href="#services"><i class="bx bx-server"></i> Projects</a></li>
                <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>

                </ul>
            </nav>
             <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

                </div>
            </header>
            
        </div>
    )
}
