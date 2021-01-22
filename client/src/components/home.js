import React,{useEffect,useState} from 'react'
import './home.css'
import Sidebar from './sidebar'
import Intro from './intro'
import {fetchSnips,deleteSnip} from '../store/actions/snips'
import {Switch,Route,withRouter,Redirect,Link,useHistory} from "react-router-dom"
import {connect} from "react-redux";
import moment from 'moment'
import uuid from 'react-uuid'
import About from './about'
function Home(props) {
    var [currentSection,changeCurrentSection]=useState(1);
    var history=useHistory();
    var {currentUser,snips}=props
    useEffect(() => {
        props.fetchSnips().then(()=>{
            console.log("snips fetched",snips)
        })
        
    },[]);

    function displayCurrentSection(sectionNum){
        changeCurrentSection(sectionNum)
    }

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
                    <b>{currPair[0].name}</b>
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">Created: {moment(currPair[0].createdAt).fromNow()}</p>
                    <p className="card-text">Updated: {moment(currPair[0].updatedAt).fromNow()}</p>
                    <div className="button-collection">
                    <Link to={{
                        pathname: "/editor",
                        data: currPair[0]
                    }}
                    >
                    <a href="#" className="btn btn-primary card-buttons">Open</a>
                    </Link>
                    <Link to={{
                        pathname: `/editorCollab/${uuid()}`,
                        data: currPair[0]
                    }}
                    >
                    <a href="#" className="btn btn-primary card-buttons">Collaborate</a>
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
                    <b>{currPair[0].name}</b>
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">Created: {moment(currPair[0].createdAt).fromNow()}</p>
                    <p className="card-text">Updated: {moment(currPair[0].updatedAt).fromNow()}</p>
                    <div className="button-collection">
                    <Link to={{
                        pathname: "/editor",
                        data: currPair[0]
                    }}
                    >
                    <a href="#" className="btn btn-primary card-buttons">Open</a>
                    </Link>
                    <Link to={{
                        pathname: `/editorCollab/${uuid()}`,
                        data: currPair[0]
                    }}
                    >
                    <a href="#" className="btn btn-primary card-buttons">Collaborate</a>
                    </Link>
                    <a  onClick={()=>handleDelete(currPair[0]._id)} href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card-header">
                    <b>{currPair[0].updatedAt + " "+currPair[0].createdAt}</b>
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">Created: {moment(currPair[0].createdAt).fromNow()}</p>
                    <p className="card-text">Last Updated: {moment(currPair[0].updatedAt).fromNow()}</p>
                    <div className="button-collection">
                    <Link to={{
                        pathname: "/editor",
                        data: currPair[1]
                    }}
                    >
                    <a href="#" className="btn btn-primary card-buttons">Open</a>
                    </Link>
                    <Link to={{
                        pathname: `/editorCollab/${uuid()}`,
                        data: currPair[1],
                    }}
                    >
                    <a href="#" className="btn btn-primary card-buttons">Collaborate</a>
                    </Link>
                    <a  onClick={()=>handleDelete(currPair[1]._id)} href="#" className="btn btn-primary card-buttons">Delete this snip</a>
                    </div>
                </div>
                </div>
            </div>

        }
        
    })
   
    
    return (
        <div className="home-flex">
            <Sidebar currentSectionHandler={(sectionNum)=>displayCurrentSection(sectionNum)}/>
            {currentSection==2 ?
            <About />
            :
            <div class="home-parent">
                <div className="home-heading">
                <h2>Your code snippets</h2>
                </div>
                {snipList && snipList.length!=0 ? snipList : <div className="emptyAcc"><br/><br/>Your code snippets will apear here. Get coding!</div>}
            </div>
            }
            

            
        </div>
    )
}

function mapStateToProps(state){
    return({
        snips:state.snips,
        errors:state.errors
  
    })
  }

export default withRouter(connect(mapStateToProps,{fetchSnips,deleteSnip})(Home));