import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StudentReportUpdate from './StudentReportUpdate';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addSelectedUser, deleteUserFromServer, getUserFromServer, removeUserFromList } from '../../Slice/UserSlice';
import defaultBookImage from '../../Assets/PersonIcon.png';
const StudentReport = () => {
    const { userList, error } = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const [modalShow, setModalShow] = useState(false)
    const [searchTitle, setSearchTitle] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(9);

    const updateUser = (user) => {
        setModalShow(true);
        dispatch(addSelectedUser(user))
    }
    const deleteUser = (user) => {
        // console.log("Delete Book");
        dispatch(deleteUserFromServer(user))
            .unwrap()
            .then(() => {
                dispatch(removeUserFromList(user))
            })
            alert("User Deleted Successfully..")
    }
    useEffect(() => {
        dispatch(getUserFromServer())
    }, [dispatch])
    //PAGINATION
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = userList
        .filter((book) =>
            searchTitle === '' || book.studentName.toLowerCase().includes(searchTitle.toLowerCase())
        )
        .slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="container-fluid">
                <h1 className='mt-4' style={{ fontSize: 'clamp(20px,4vw,52px)' }}>Student Report</h1>
                <Form className='mt-4'>
                    <Form.Group className="d-flex">
                        <Form.Control type="text"
                            placeholder="Search student name..." className="flex-grow-1 p-3 mt-2"
                            id="bookTitle"
                            value={searchTitle}
                            onChange={(e) => setSearchTitle(e.target.value)}
                        />
                    </Form.Group>
                </Form>
                {(error !== "") ? <h2 className=' m-5 text-danger text-center'>{error}</h2> : null}
                <div className="row d-flex justify-content-between mt-4" >
                    {currentBooks
                        .map((user) => (

                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-5 col-xs-10 m-2" key={user._id}>
                                <Card style={{ width: '14rem' }}>
                                    <Card.Img style={{ width: '100%', height: '12rem' }} variant="top" src={user.userImage ? user.userImage : defaultBookImage} />
                                    <Card.Body>
                                        <Card.Title>{user.studentName} <p style={{ display: "inline-block", fontSize: "13px" }} className='m2-3 lead'>{user.branch}</p></Card.Title>
                                        <Card.Text>
                                            <p className='text-primary'>{user.registerNo}</p>
                                            <a>{user.email}</a>
                                            <p>+91 {user.mobileNumber}</p>
                                        </Card.Text>
                                        <Button variant="primary" className='mx-2' onClick={() => updateUser(user)}><i className='bi bi-pencil-square' /></Button>
                                        <Button variant="danger" onClick={() => deleteUser(user)}><i className='bi bi-trash3' /></Button>
                                    </Card.Body>
                                </Card>
                                <StudentReportUpdate
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />

                            </div>

                        ))}
                    <ul className="pagination justify-content-center mt-3">
                        {[...Array(Math.ceil(userList.length / booksPerPage)).keys()].map((number) => (
                            <li key={number} className="page-item">
                                <button onClick={() => paginate(number + 1)} className="page-link">
                                    {number + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



        </>
    )
}

export default StudentReport
