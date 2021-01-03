import React,{useEffect} from 'react'
import './home.css'
import Sidebar from './sidebar'
import Intro from './intro'
import {fetchSnips,deleteSnip} from '../store/actions/snips'
import {Switch,Route,withRouter,Redirect,Link} from "react-router-dom"
import {connect} from "react-redux";

function Home(props) {
    var {currentUser,snips}=props
    useEffect(() => {
        props.fetchSnips().then(()=>{
            console.log("snips fetched",snips)
        })
        
    },[]);
    async function handleDelete(snipID){
        await props.deleteSnip(snipID)
        props.fetchSnips()
    }
    var mysnips=[];
    for (let i = 0; i < snips.length; i+=2) {
        if(i+1<snips.length){
           mysnips.push([snips[i],snips[i+1]])
        }else{
            mysnips.push([snips[i]])
        }
    }
    console.log("mysnips",mysnips)
    var snipList=mysnips.map((currPair)=>{
        if(currPair.length==1){
            return <div className="homeDiv">
            <div className="card">
                <div className="card-header">
                    {currPair[0].name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div>
                    <Link to={{
                        pathname: "/editor",
                        data: currPair[0]
                    }}
                    >
                    <a href="#" className="btn btn-primary card-buttons">Open</a>
                    </Link>
                    <a  onClick={()=>handleDelete(currPair[0]._id)} href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                    </div>
                </div>
                </div>
            </div>
        }else{
            return <div className="homeDiv">
            <div className="card">
                <div className="card-header">
                    {currPair[0].name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div>
                    <Link to={{
                        pathname: "/editor",
                        data: currPair[0]
                    }}
                    >
                    <a href="#" className="btn btn-primary card-buttons">Open</a>
                    </Link>
                    <a  onClick={()=>handleDelete(currPair[0]._id)} href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card-header">
                    {currPair[1].name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div>
                    <Link to={{
                        pathname: "/editor",
                        data: currPair[1]
                    }}
                    >
                    <a href="#" className="btn btn-primary card-buttons">Open</a>
                    </Link>
                    <a  onClick={()=>handleDelete(currPair[1]._id)} href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                    </div>
                </div>
                </div>
            </div>

        }
        
    })
   
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
                {snipList && snipList.length!=0 ? snipList : <div>wait</div>}
            </div>

            
        </div>
    )
    }
}

function mapStateToProps(state){
    return({
        snips:state.snips,
        errors:state.errors
  
    })
  }

export default withRouter(connect(mapStateToProps,{fetchSnips,deleteSnip})(Home));