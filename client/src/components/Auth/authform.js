import React from 'react'

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
            <p className="toggle-auth">{toggleMessage} <u>{toggleMessageU}</u></p>
                
            {/* <div class="form-group">
                <label class="control-label" style={{color:"white"}} htmlFor="email" >Email:</label>
                <div>          
                    <input onChange={()=>{}} type="text" class="form-control" id="email" placeholder="Enter Email" name="email" />
                </div>
            </div>
            <div class="form-group">
                <label class="control-label" style={{color:"white"}} htmlFor="password">Password:</label>
                <div class="col-sm-10">          
                    <input onChange={()=>{}} type="text" class="form-control" id="email" placeholder="Enter Password" name="email" />
                </div>
            </div>
            <br></br>
            <div>
                <button class="btn btn-primary long-button" type="button">Button</button>
            </div>
             */}
            </form>
        </div>
    )
}
