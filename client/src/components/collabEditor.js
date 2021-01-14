

import React,{useState,useEffect, Component} from 'react';
import Editor from "./editor";
import Navbar from './navbar';
import {saveSnip} from '../store/actions/snips'
import {Switch,Route,withRouter,Redirect,useParams} from "react-router-dom"
import {connect} from "react-redux";
import io from "socket.io-client";
const socket = io();



function CollabEditor(props) {
  var {data}=props.location
  const { id } = useParams()
  //socket.emit("joinRoom",{username:"su"+Math.floor(Math.random()*20).name,room:id})
  console.log("data passed",data)
  var codeData=data ? data.code : {html:'',css:'',js:''};
  const [newFlag,setNewFlag]=useState(data ? false : true)
  const [html,setHtml]=useState(codeData.html)
  const [css,setCSS]=useState(codeData.css)
  const [js,setJs]=useState(codeData.js)
  const [srcDoc,setSrcDoc]=useState('')

  useEffect( ()=>{
      // const { id } = useParams()
      console.log("location number",id)
      //socket.emit("joinRoom",{username:"su"+Math.floor(Math.random()*20).name,room:id})
     // await 
        if(data){
          socket.emit("joinRoom",{username:"su"+Math.floor(Math.random()*20).name,room:id,code:codeData})
          // console.log("sending first set of data ")
          // socket.emit("code",{html,css,js})
        }else{
          socket.emit("joinRoom",{username:"su"+Math.floor(Math.random()*20).name,room:id})
        }
        socket.on("code-data", function(data){
            console.log("getting my data")
            console.log("code cfc data",data)
            console.log(typeof(data.html))
            setHtml(data.html)
            setCSS(data.css)
            setJs(data.js)
        })
  },[])

  useEffect(()=>{
    const timeout=setTimeout(() => {
      setSrcDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `)
        //socket.send({html,css,js})
        socket.emit("code",{html,css,js})
    }, 2000);
    return ()=> clearTimeout(timeout)
  },[html,css,js])

  function saveDocument(fileName){
    
    var code={
      html,
      css,
      js
    }
    if(newFlag){
      props.saveSnip({code,name:fileName}).then((res)=>{
        console.log("snip save",res)
      })
    }else{
      props.saveSnip({snipID:data._id,code,name:data.name}).then((res)=>{
        console.log("snip save",res)
      })
    }
    
  }

  return (
    <div className="App">
      <Navbar file={newFlag ? 'untitled' : data.name} onSave={saveDocument}/>
      <div>
      <div className="pane top-pane">
        <Editor 
          displayName='HTML' 
          language='xml'
          value={html}
          onChange={setHtml}
        />
        <Editor 
          displayName='CSS' 
          language='css'
          value={css}
          onChange={setCSS}
        />
        <Editor 
          displayName='JS' 
          language='javascript'
          value={js}
          onChange={setJs}
        />

      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return({
      currentUser:state.currentUser,
      errors:state.errors

  })
}


export default withRouter(connect(mapStateToProps,{saveSnip})(CollabEditor));

