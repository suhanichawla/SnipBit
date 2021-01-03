import React,{useState,useEffect} from 'react';
import Editor from "./editor";
import Navbar from './navbar';
import {saveSnip} from '../store/actions/snips'
import {Switch,Route,withRouter,Redirect} from "react-router-dom"
import {connect} from "react-redux";
function Codespace(props) {
  var {data}=props.location
  console.log("data passed",data)
  var codeData=data ? data.code : {html:'',css:'',js:''};
  const [newFlag,setNewFlag]=useState(data ? false : true)
  const [html,setHtml]=useState(codeData.html)
  const [css,setCSS]=useState(codeData.css)
  const [js,setJs]=useState(codeData.js)
  const [srcDoc,setSrcDoc]=useState('')

  useEffect(()=>{
    const timeout=setTimeout(() => {
      setSrcDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `)
    }, 1000);
    return ()=> clearTimeout(timeout)
  },[html,css,js])

  function saveDocument(){
    
    var code={
      html,
      css,
      js
    }
    if(newFlag){
      props.saveSnip({code,name:"firstsnip"+Math.random(20)}).then((res)=>{
        console.log("snip save",res)
      })
    }else{
      props.saveSnip({snipID:data._id,code,name:"firstsnip"+Math.random(20)}).then((res)=>{
        console.log("snip save",res)
      })
    }
    
  }

  return (
    <div className="App">
      <Navbar onSave={saveDocument}/>
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


export default withRouter(connect(mapStateToProps,{saveSnip})(Codespace));

