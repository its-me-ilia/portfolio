import { combineReducers } from "redux";
import langReducer from './appwide/langReducer';

const rootReducer = combineReducers({
    lang: langReducer 
});

export default rootReducer;