import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { getUserFromServer } from '../../Slice/UserSlice';
import defaultUserImage from '../../Assets/PersonIcon.png';

const UserAccount = () => {
    const { userList } = useSelector((state) => state.users);

    const user = JSON.parse(localStorage.getItem('user'));

    const isAvailable = userList.filter((users) => users.registerNo === user.userRegisterNo);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserFromServer());
    }, [dispatch]);

    // Check if isAvailable has elements and if isAvailable[0] has userImage property
    const userImage = isAvailable.length > 0 && isAvailable[0].userImage ? isAvailable[0].userImage : defaultUserImage;

    return (
        <>
            <section className="fdb-block mt-5">
                <div className="container">
                    <div className="fdb-box">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto">
                                <img alt="image" className="img-fluid rounded-circle" src={userImage} />
                            </div>

                            <div className="col-12 col-md-8 ml-auto mr-auto mt-4 mt-md-0">
                                <p className="lead">
                                    "A student's heart dances with joy, for every page turned is a step closer to enlightenment." "Between the pages of a book and the mind of a learner, love blossoms in the form of endless discovery."
                                </p>

                                <p className="h3 mt-4 mt-lg-5"><strong>{isAvailable.length > 0 ? isAvailable[0].studentName : 'Unknown'}</strong></p>
                                <p><em>{user.userRegisterNo}</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserAccount;
