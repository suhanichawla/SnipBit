import {combineReducers} from "redux";
import currentUser from "./currentUser"
import errors from "./errors";
import snips from "./snips"

const rootReducer=combineReducers({
    currentUser,
    errors,
    snips
})

export default rootReducer;