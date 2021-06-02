  
import {combineReducers} from 'redux';
import incTheNumber from "./reducer/inCreMent";
// import decTheNumber from "./reducer/deCreMent";
// import resTheNumber from "./reducer/ReSet";

const rootReducer  = combineReducers({
    incTheNumber,
    // decTheNumber,
    // resTheNumber,
});
export default rootReducer;