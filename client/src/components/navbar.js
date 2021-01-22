

import React,{Component} from "react"
import {Link,withRouter} from "react-router-dom"
import {connect} from "react-redux"
import './navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'


import logo from '../assets/logowotext.png'
class Navbar extends Component{
    constructor(){
        super();
        this.state={
           isEditing:false,
           fileName:'untitled'
        }
    }
    componentDidMount(){
        this.setState({fileName:this.props.file})
    }
    changeEditMode=()=>{
        console.log("i get fired")
        this.setState({
            isEditing:!this.state.isEditing
        })
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    copyRoomCode=()=>{
        let input = document.createElement("input");
      
        input.style.opacity="0";
        input.style["pointer-events"] = "none";
        document.body.appendChild(input);
        input.value = window.location.pathname;
        input.focus();
        input.select();
        document.execCommand('copy');
        // var tooltip = document.getElementById("myTooltip");
        // tooltip.innerHTML = "Copied code"
    }

    // tooltipTextChange=()=>{
    //     var tooltip = document.getElementById("myTooltip");
    //     tooltip.innerHTML = "Copy to clipboard";
    // }

    render(){
        console.log("path",this.props.location.pathname)
        return(
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo home" height="50px"/>
                    </Link>
                        {this.state.isEditing ? (
                            <>
                            <input type="text" name="fileName" value={this.state.fileName} onChange={this.handleChange} />
                            <FontAwesomeIcon style={{color:"green",height:"20px",width:"20px",cursor:"pointer",marginLeft:"4px"}} onClick={this.changeEditMode} icon={faCheck} />
                            </>
                        ):
                        (
                        <text style={{color:"white"}} onClick={this.changeEditMode}>{this.state.fileName}</text>
                        )
                        }
                    
                    </div>
                        <ul className="nav navbar-nav navbar-right">
                        {this.props.onCollab && (
                            
                        <a onClick={()=>this.copyRoomCode()} className="btn btn-primary card-buttons nav-buttons">{"Copy Room Code"}</a>
                            
                        )}
                            <Link
                                to={`/`}
                            ><a onClick={()=>this.props.onSave(this.state.fileName)} href="#" className="btn btn-primary card-buttons nav-buttons">{"Save & Exit"}</a>
                            </Link>
                            <Link
                                to={`/`}
                            ><a href="#" className="btn btn-primary card-buttons nav-buttons">Exit</a>
                            </Link>
                        </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps(reduxState){
    return {
        currentUser:reduxState.currentUser
    }
}

export default withRouter(connect(mapStateToProps,null)(Navbar));