import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./Slice/BookSlice"
import userReducer from "./Slice/UserSlice"
// import UserSlice from "../Slice/UserSlice";
import issueBookReducer from "../Slice/IssueBookSlice"
const rootReducer = combineReducers( {
        books:bookReducer,
        users:userReducer,
        issueBook:issueBookReducer,
})

export default rootReducer