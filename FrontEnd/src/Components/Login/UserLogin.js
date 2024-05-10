import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getUserFromServer } from '../../Slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';


const UserLogin = (props) => {
    const { userList } = useSelector((state) => state.users)
    const [userEmail, setUserEmail] = useState()
    const [userRegisterNo, setUserRegisterNo] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getUserFromServer())
    }, [dispatch])
    const handleLogin = async (e) => {
        e.preventDefault(); // Use e instead of data
        // console.log(e);
        const userValidEmail = userList.find((user) => user.email === userEmail)
        const userValidRegisterNo = userList.find((user) => user.registerNo === userRegisterNo)

        if (userValidEmail && userValidRegisterNo) {
            const requestData = {
                userEmail: userEmail,
                userRegisterNo: userRegisterNo,
            };
            localStorage.setItem('user', JSON.stringify(requestData));
            // navigate('/sideBarUser')
            navigate('/userAccount')
        } else {
            navigate('/notFound')
        }

    };


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{backdropFilter:'blur(10px)' }}
        >

            <Modal.Body style={{padding:'50px 0px' }}>
                <form onSubmit={(e) => handleLogin(e)} className="fdb-block" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-7 col-xl-5 text-center">
                                <div className="fdb-box">
                                    <div className="row">
                                        <div className="col">
                                            <h1>Log In</h1>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <input type="text"
                                                className="form-control"
                                                id="userMail"
                                                placeholder="Enter your User Email"
                                                value={userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <input type="password"
                                                className="form-control"
                                                id="registerNo"
                                                placeholder="Enter your Register Number"
                                                value={userRegisterNo}
                                                onChange={(e) => setUserRegisterNo(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <button className="btn btn-outline-primary"
                                                type="submit"
                                                >
                                                Submit
                                            </button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-danger"
                                            type="button"
                                            onClick={props.onHide}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal >
    );
};

export default UserLogin;





