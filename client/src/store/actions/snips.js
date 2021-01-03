
import {apiCall} from "../../services/api"
import {addError} from "./error"
import {LOAD_SNIPS,REMOVE_SNIP, REMOVE_ERROR} from "../actionTypes"

export const loadSnips=snippets=>({
    type:LOAD_SNIPS,
    snippets
})

export const remove=id=>({
  type:REMOVE_SNIP,
  id
})

export const fetchSnips =  () => (dispatch, getState)=> {
      let {currentUser}=getState();
      let id=currentUser.user._id;
      return apiCall("get", `/api/users/${id}/snips`)
        .then(res => {
          console.log(res);
          dispatch(loadSnips(res));
        })
        .catch(err => {
          dispatch(addError(err.message));
        });
  };

  export const saveSnip = snip => (dispatch, getState)=>{
    let {currentUser}=getState();
    let id=currentUser.user._id;
    var requestSnip;
    if(snip.snipID){
      requestSnip={code:snip.code,name:snip.name,snipID:snip.snipID}
    }else{
      requestSnip={code:snip.code,name:snip.name}
    }
      return apiCall("post", `/api/users/${id}/snips/save`,requestSnip)
        .then(res => console.log("reslult of snip save",res))
        .catch(err => {
          dispatch(addError(err.message));
        });
  };

  export const removeMessages=(user_id,message_id)=>{
    return dispatch => {
      return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
        .then(res => {
          dispatch(remove(message_id));
        })
        .catch(err => {
          dispatch(addError(err.message));
        });
  }
}