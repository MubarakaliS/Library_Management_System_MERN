import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { getAdminFromServer } from '../../Slice/AdminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = (props) => {
    const { adminList, error } = useSelector((state) => state.admin)
    const [adminEmail, setAdminEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAdminFromServer())
    }, [dispatch])
    const handleLogin = async (e) => {
        e.preventDefault(); // Use e instead of data
        console.log(e);

        const requestData = {
            adminEmail: adminEmail,
            password: password,
        };
        await axios.post('https://library-management-system-mern-krp1.onrender.com/api/admin/adminSignIn', requestData).
            then(res => {
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate('/sideBar')
            })
            .catch(err => {
                console.error(error.message);
                navigate('/notFound')
                localStorage.clear();
            })


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
                <form onSubmit={handleLogin} style={{backdropFilter:'blur(10px)' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-7 col-xl-5 text-center">
                                <div className="fdb-box">
                                    <div className="row">
                                        <div className="col">
                                            <h1>Admin Log In</h1>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <input type="text"
                                                className="form-control"
                                                id="adminMail"
                                                placeholder="Enter your adminEmail"
                                                value={adminEmail}
                                                onChange={(e) => setAdminEmail(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <input type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />

                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <button className="btn btn-outline-primary" type="submit"

                                                >Submit</button>
                                        </div>
                                        <div className="col">
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={props.onHide}
                                            >
                                                Close
                                            </button>
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

export default AdminLogin;






