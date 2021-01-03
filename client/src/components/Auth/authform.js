import React from 'react'
import {Link} from 'react-router-dom';

export default function Authform(props) {
    var {isSignup,buttonText,toggleMessage,toggleMessageU}=props;
    return (
        <div className={`mainpage-form ${isSignup ? 'mainpage-form-long' : ''}`}>
            <form>
            {isSignup && (<div className="authform-whole-input">
                <label className="authform-label" htmlFor="name" >Name:</label>
                <div>          
                    <input onChange={()=>{}} type="text" className="authform-inp" id="name" placeholder="Enter Name" name="name" />
                </div>
            </div>
            )}
                <div className="authform-whole-input">
            <label className="authform-label" htmlFor="email" >Email:</label>
                <div>          
                    <input onChange={()=>{}} type="text" className="authform-inp" id="email" placeholder="Enter Email" name="email" />
                </div>
                </div>
                <div className="authform-whole-input">
            <label className="authform-label" htmlFor="email" >Password:</label>
                <div>          
                    <input onChange={()=>{}} type="password" className="authform-inp" id="password" placeholder="Enter Password" name="password" />
                </div>
                </div>
                <div>
            <label className="authform-label" htmlFor="email" ></label>
                <div className="authform-whole-input">          
                    <button className="long-button" type="button">{buttonText}</button>
                </div>
                </div>
                <br></br>
            <p className="toggle-auth">{toggleMessage} <Link to={isSignup ? "/" : "/register"}><u className="white-underline">{toggleMessageU}</u></Link></p>
                
            
            </form>
        </div>
    )
}
