
import {Link} from 'react-router-dom';
import '../main.css'

import React,{Component} from "react"

class Authform extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            name:"",
            password:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const authType=this.props.isSignup ? "signup" :"signin";
        this.props.onAuth(authType,this.state).then(()=>{
            console.log(this.props.history);
           this.props.history.push("/")
        })
        .catch(()=>{
            return;
        })
    }
    render(){
        
        var {isSignup,buttonText,toggleMessage,toggleMessageU,error,history,removeError}=this.props;
        history.listen(()=>{
            removeError();
        })
        return (
            <div className={`mainpage-form ${isSignup ? 'mainpage-form-long' : ''}`}>
                <form onSubmit={this.handleSubmit}>
                {isSignup && (<div className="authform-whole-input">
                    <label className="authform-label" htmlFor="name" >Name:</label>
                    <div>          
                        <input onChange={this.handleChange} type="text" className="authform-inp" id="name" placeholder="Enter Name" name="name" />
                    </div>
                </div>
                )}
                    <div className="authform-whole-input">
                <label className="authform-label" htmlFor="email" >Email:</label>
                    <div>          
                        <input onChange={this.handleChange} type="text" className="authform-inp" id="email" placeholder="Enter Email" name="email" />
                    </div>
                    </div>
                    <div className="authform-whole-input">
                <label className="authform-label" htmlFor="email" >Password:</label>
                    <div>          
                        <input onChange={this.handleChange} type="password" className="authform-inp" id="password" placeholder="Enter Password" name="password" />
                    </div>
                    </div>
                    <div>
                <label className="authform-label" htmlFor="email" ></label>
                    <div className="authform-whole-input">          
                        <button className="long-button" type="submit">{buttonText}</button>
                    </div>
                    </div>
                    <br></br>
                <p className="toggle-auth">{toggleMessage} <Link to={isSignup ? "/login" : "/register"}><u className="white-underline">{toggleMessageU}</u></Link></p>
                {error.message && <div className="alert alert-danger">{error.message}</div>}
                
                </form>
            </div>
        )
    }
}
export default Authform;

