import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './Module/AddStudent';
import AddBook from './Module/AddBook';
import BookReport from './Module/BookReport';
import Home from './NavComponents/Home';
import StudentReportModule from './Module/StudentReportModule';
import BookIssue from './Module/BookIssue';
import BookIssueReport from './Module/BookIssueReport';
import UserAccountModule from './StudentModule/UserAccountModule';
import UserBookReportModule from './StudentModule/UserBookReportModule';
import UserBookIssueReportModule from './StudentModule/UserBookIssueReportModule';
import SideBarAdmin from './Module/SideBarAdmin';
import NotFound from '../NotFound';
import ProtectedRouter from './ProtectedRouter';
import SideBarUser from './Module/SideBarUser';
import ReturnBook from './Module/ReturnBook';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sideBar' element={<SideBarAdmin />} />
          <Route path='/addstudent' element={<AddStudent />} />
          <Route path='/addBook' element={<AddBook />} />
          <Route path='/bookReport' element={<BookReport />} />
          <Route path='/studentReport' element={<StudentReportModule />} />
          <Route path='/bookIssue' element={<BookIssue />} />
          <Route path='/bookIssueReport' element={<BookIssueReport />} />
          <Route path='/returnBook' element={<ReturnBook/>}/>
          <Route path='/sideBarUser' element={<SideBarUser/>} />
          <Route path='/userAccount' element={<UserAccountModule />} />
          <Route path='/userBookReport' element={<UserBookReportModule />} />
          <Route path='/userBookIssue' element={<UserBookIssueReportModule />} />
          <Route path='/logout' element={<Home />} />
          <Route path='/notFound' element={<NotFound />} />
          <Route path='/home' element={<ProtectedRouter component={Home} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
