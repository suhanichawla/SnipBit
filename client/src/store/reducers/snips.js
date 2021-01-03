import {LOAD_SNIPS,REMOVE_SNIP} from "../actionTypes"



export default (state=[],action)=>{
    switch(action.type){
        case LOAD_SNIPS:
            return [...action.snippets]
        case REMOVE_SNIP:
            return state.filter(msg=>msg._id!==action.id)
        default:
            return state;
    }
}