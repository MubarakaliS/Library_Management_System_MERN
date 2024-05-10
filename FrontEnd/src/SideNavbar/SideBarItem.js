import React, { useEffect } from 'react'
import '../styles/SideNav.css'
import {getAdminFromServer } from '../Slice/AdminSlice';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const SideBarItem = ({ onItemClick }) => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getAdminFromServer())
    }, [dispatch])  
    const handleLogout = (item) => {
        navigate('/logout');
    };
    const handleAddStudent = (item) => {
        navigate('/addstudent');
    };
    const handleAddBook = () => {
        navigate('/addBook');
    }
    const handleBookReport = () => {
        navigate('/bookReport');
    }
    const handleStudentReport = () => {
        navigate('/studentReport');
    }
    const handleBookIssue = () => {
        navigate('/bookIssue');
    }
    const handleBookIssueReport = () => {
        navigate('/bookIssueReport');
    }
    const handleBookReturnReport=()=>{
        navigate('/returnBook')
    }
    return (
        <div className='container-fluid'>
            <div className='row' style={{ "height": "auto" }}>
                <div className='bg-dark col-auto col-md-2' style={{ "width": "auto" }}>
                    <br />
                    <a className='text-decoration-none text-white d-flex align-items-center ms-3 mt-5 m-5 d-none d-md-inline'>
                        <i className=' bi bi-menu-button-wide d-none '> </i>
                        <span className='text-warning'>MCA LIBRARY</span>
                    </a>
                    <br />
                    <hr className='text-white' />
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item text-white  my-1" onClick={() => handleAddBook('ADD BOOK')} >
                            <a href="#" className="nav-link text-white " aria-current="page" style={{ "fontSize": "clamp(20px,1vw,35px)" }}>
                                <i className='bi bi-plus-lg'></i>
                                <span className='ms-3 d-none d-md-inline'>ADD BOOK</span>
                            </a>
                        </li>
                        <li className="nav-item text-white my-1 " onClick={() => handleAddStudent('ADD BOOK')} >
                            <a href="#" className="nav-link text-white " aria-current="page" style={{ "fontSize": "clamp(20px,1vw,35px)" }}>
                                <i className='bi bi-person-add'></i>
                                <span className='ms-3 d-none d-md-inline'>ADD STUDENT</span>
                            </a>
                        </li>
                        <li className="nav-item text-white  my-1 " onClick={() => handleBookReport('BOOK REPORT')} >
                            <a href="#" className="nav-link text-white" aria-current="page" style={{ "fontSize": "clamp(20px,1vw,35px)" }}>
                                <i className='bi bi-calendar-check'></i>
                                <span className='ms-3 d-none d-md-inline'>BOOK REPORT</span>
                            </a>
                        </li>
                        <li className="nav-item text-white my-1" onClick={() => handleStudentReport('ADD BOOK')} >
                            <a href="#" className="nav-link text-white" aria-current="page" style={{ "fontSize": "clamp(20px,1vw,35px)" }}>
                                <i className='bi bi-person-vcard'></i>
                                <span className='ms-3 d-none d-md-inline'>STUDENT REPORT</span>
                            </a>
                        </li>
                        <li className="nav-item text-white  my-1 " onClick={() => handleBookIssue('ADD BOOK')} >
                            <a href="#" className="nav-link text-white " aria-current="page" style={{ "fontSize": "clamp(20px,1vw,35px)" }}>
                                <i className='bi bi-journal-text'></i>
                                <span className='ms-3 d-none d-md-inline'>ISSUE BOOK</span>
                            </a>
                        </li>
                        <li className="nav-item text-white  my-1 " onClick={() => handleBookIssueReport('ADD BOOK')} >
                            <a href="#" className="nav-link text-white " aria-current="page" style={{ "fontSize": "clamp(20px,1vw,35px)" }}>
                                <i className='bi bi-journals'></i>
                                <span className='ms-3 d-none d-md-inline'>ISSUE REPORT</span>
                            </a>
                        </li>
                        <li className="nav-item text-white  my-1 " onClick={() => handleBookReturnReport('ADD BOOK')} >
                            <a href="#" className="nav-link text-white " aria-current="page" style={{ "fontSize": "clamp(20px,1vw,35px)" }}>
                                <i className='bi bi-journals'></i>
                                <span className='ms-3 d-none d-md-inline'>RETURN REPORT</span>
                            </a>
                        </li>
                        <li className="nav-item text-white  my-1 d-flex flex-row align-item-end " onClick={() => handleLogout('ADD BOOK')}>
                            <a href="#" className="nav-link text-white " aria-current="page"  style={{ "fontSize": "clamp(20px,1vw,35px)" }}>
                                <i className='bi bi-box-arrow-right'></i>
                                <span className='ms-3 d-none d-md-inline'>LOGOUT</span>
                            </a>
                        </li>
                    </ul>

                </div>
               
            </div>
        </div>
    )
}

export default SideBarItem