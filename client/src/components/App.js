import React,{useState,useEffect} from 'react';
import Codespace from './codespace';
import Editor from "./editor";
import Home from './home';
import Main from './main';
import Sidebar from './sidebar';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return(
     <Router>
     <div className="appcomp">
      <Main/>
     </div>
    </Router>
  )
}

export default App;
