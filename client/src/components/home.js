import React from 'react'
import './home.css'
import Sidebar from './sidebar'
import Intro from './intro'

export default function Home({currentUser}) {
    if(!currentUser.isAuth){
        return(
        <div className="">
            <Intro isSignup={false}/>
        </div>
        )
    }else{
    return (
        <div className="home-flex">
            <Sidebar />
            <div>
                <div className="home-heading">
                <h2>Your code snippets</h2>
                </div>
            <div className="homeDiv">
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div>
                        <a href="#" className="btn btn-primary card-buttons">Open</a>
                        <a  href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div>
                        <a href="#" className="btn btn-primary card-buttons">Open</a>
                        <a  href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="homeDiv">
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div>
                        <a href="#" className="btn btn-primary card-buttons">Open</a>
                        <a  href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div>
                        <a href="#" className="btn btn-primary card-buttons">Open</a>
                        <a  href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="homeDiv">
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div>
                        <a href="#" className="btn btn-primary card-buttons">Open</a>
                        <a  href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div>
                        <a href="#" className="btn btn-primary card-buttons">Open</a>
                        <a  href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="homeDiv">
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div>
                        <a href="#" className="btn btn-primary card-buttons">Open</a>
                        <a  href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div>
                        <a href="#" className="btn btn-primary card-buttons">Open</a>
                        <a  href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                        </div>
                    </div>
                    </div>
            </div>
            </div>

            
        </div>
    )
    }
}
