import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Slice/BookSlice"
import userReducer from "./Slice/UserSlice"
import issueBookReducer from "./Slice/IssueBookSlice";
import adminReducer from "./Slice/AdminSlice";
export  const store=configureStore({
    reducer:{
        books:bookReducer,
        users:userReducer,
        issueBook:issueBookReducer,
        admin:adminReducer
    }
})