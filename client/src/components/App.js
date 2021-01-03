import React,{useState,useEffect} from 'react';
import Codespace from './codespace';
import Editor from "./editor";
import Home from './home';
import Main from './main';
import Sidebar from './sidebar';
import {configStore} from "../store"
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import jwtDecode from "jwt-decode"

const store=configStore()
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken)
  try{
    console.log("setting current user")
     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  }catch(e){
    store.dispatch(setCurrentUser({}))
  }
}

function App() {
  return(
    <Provider store={store}>
     <Router>
     <div className="appcomp">
      <Main/>
     </div>
    </Router>
    </Provider>
  )
}

export default App;
