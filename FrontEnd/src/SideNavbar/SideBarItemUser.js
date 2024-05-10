import React from 'react'
import '../styles/SideNavUser.css'
import {  useNavigate } from 'react-router-dom';
const SideBarItemUser = ({ onItemClick }) => {
    const navigate = useNavigate();
    const handleUserAccount = (item) => {
        navigate('/userAccount');
    };
    const handleLogout=()=>{
       navigate('/logout');
    }
    const handleUserBookReport=()=>{
        navigate('/userBookReport')
    }
    const handleUserBookIssue=()=>{
        navigate('/userBookIssue');
    }
    return (
        <div className='container-fluid'>
            <div className='row' style={{ "height": "120vh" }}>
                <div className=' col-auto col-md-3' style={{ "width": "auto",backgroundColor:'#90D26D' }}>
                    <br />
                    <a className='text-decoration-none text-dark d-flex align-items-center ms-3 mt-5 m-5 d-none d-sm-inline'>
                        <i className=' bi bi-menu-button-wide d-none '> </i>
                        <span className=''>STUDENT PORTAL</span>
                    </a>
                    <br />
                    <hr className='' />
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item   my-1" onClick={() => handleUserAccount('ADD BOOK')} >
                            <a href="#" className="nav-link  " aria-current="page" style={{ "fontSize": "1rem" }}>
                                <i className='bi bi-person-vcard'></i>
                                <span className='ms-3 d-none d-sm-inline'>MY ACCOUNT</span>
                            </a>
                        </li>
                        <li className="nav-item   my-1 " onClick={() => handleUserBookReport('BOOK REPORT')} >
                            <a href="#" className="nav-link " aria-current="page" style={{ "fontSize": "1rem" }}>
                                <i className='bi bi-calendar-check'></i>
                                <span className='ms-3 d-none d-sm-inline'>BOOK REPORT</span>
                            </a>
                        </li>
                        <li className="nav-item   my-1 " onClick={() => handleUserBookIssue('ADD BOOK')} >
                            <a href="#" className="nav-link  " aria-current="page" style={{ "fontSize": "1rem" }}>
                                <i className='bi bi-journals'></i>
                                <span className='ms-3 d-none d-sm-inline'>ISSUE REPORT</span>
                            </a>
                        </li>
                        <li className="nav-item   my-1 d-flex flex-row align-item-end " onClick={() => handleLogout('ADD BOOK')}>
                            <a href="#" className="nav-link  " aria-current="page">
                                <i className='bi bi-box-arrow-right'></i>
                                <span className='ms-3 d-none d-sm-inline'>LOGOUT</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>  
        </div>
    )
}

export default SideBarItemUser