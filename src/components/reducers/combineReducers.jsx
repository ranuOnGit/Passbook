import { combineReducers } from "redux";
import { newEntryReducer } from "./newEntryReducer";


export const rootReducer = combineReducers( {
    entries: newEntryReducer,    
})