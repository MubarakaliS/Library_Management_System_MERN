import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBookFromServer } from '../../Slice/BookSlice';
import { getUserFromServer } from '../../Slice/UserSlice';
import { getIssueBookFromServer } from '../../Slice/IssueBookSlice';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {

    const { bookList } = useSelector((state) => state.books);
    const { userList } = useSelector((state) => state.users);
    const { issueBookList } = useSelector((state) => state.issueBook);
    const dispatch = useDispatch()
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(getBookFromServer())
        dispatch(getUserFromServer())
        dispatch(getIssueBookFromServer())
    }, [dispatch])
    // Parse JSON stored in localStorage
    const adminDetail = JSON.parse(localStorage.getItem('auth'));
    // Ensure adminDetail is not null or undefined before accessing properties
    const adminEmail = adminDetail ? adminDetail.admin.adminEmail : '';
    const adminName = adminDetail ? adminDetail.admin.adminName : '';
    // console.log(adminEmail);
    return (
        <>
            <section className="fdb-block">
                <div className="container">
                    <div className="row pb-3 mt-5">
                        <div className="col text-center">
                            <h1>Welcome {adminName}(Admin)</h1>
                        </div>
                    </div>
                    <div className="row pt-5 justify-content-center align-items-center">
                        <div className="col-11 col-md-7 col-lg-3 mx-2 mt-3 p-5" style={{  borderRadius: '20px',backgroundColor:'#76ABAE' }}>
                            <p className='fs-5 text-center' style={{ fontWeight: '700' }}>User List</p>
                            <h2 className=' text-center' style={{ fontWeight: '700' }}>{userList.length}</h2>
                            <a className='btn btn-outline-dark mt-3' style={{ padding: '5px 25px',fontWeight:'700' }} onClick={()=>navigate('/studentReport')}>More</a>
                        </div>
                        <div className="col-11 col-md-7 col-lg-3 mx-2 p-5 mt-3 col-sm-offset-1" style={{  borderRadius: '20px',backgroundColor:'#A4CE95' }}>
                            <p className='fs-5 text-center' style={{ fontWeight: '700' }}>Book List</p>
                            <h2 className=' text-center' style={{ fontWeight: '700' }}>{bookList.length}</h2>
                            <a className='btn btn-outline-dark mt-3' style={{ padding: '5px 25px',fontWeight:'700' }} onClick={()=>navigate('/bookReport')}>More</a>
                        </div>
                        <div className="col-11 col-md-7 col-lg-3 mx-2 p-5 mt-3 col-sm-offset-1" style={{  borderRadius: '20px',backgroundColor:'#E1AFD1' }}>
                            <p className='fs-5 text-center' style={{ fontWeight: '700' }}>Issue List</p>
                            <h2 className=' text-center' style={{ fontWeight: '700' }}>{issueBookList.length}</h2>
                            <a className='btn btn-outline-dark mt-3' style={{ padding: '5px 25px',fontWeight:'700' }} onClick={()=>navigate('/bookIssueReport')}>More</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default MainContent;
