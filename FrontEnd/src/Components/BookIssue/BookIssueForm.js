import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { fetchBookByISBN, updateSearchISBN, getBookFromServer, updateIssueBookInServer } from '../../Slice/BookSlice';

import { addIssueBookToServer } from '../../Slice/IssueBookSlice';
import defaultBookImage from '../../Assets/Card.jpg';

const BookIssueForm = () => {
    const [isbn, setIsbn] = useState('')
    const [registerNo, setRegisterNo] = useState('')
    const [issueDate, setIssueDate] = useState()

    const dispatch = useDispatch();
    const { bookList, isLoading, error, searchISBN } = useSelector((state) => state.books);
    const { users } = useSelector((state) => state); // Assuming users state has register number and other user details

    useEffect(() => {
        if (searchISBN) {
            dispatch(fetchBookByISBN(searchISBN));
        }
        dispatch(getBookFromServer());
    }, [dispatch, searchISBN]);




  

const handleBookIssue = (e) => {
    e.preventDefault();
  
    const selectedBook = bookList.find((book) => book.isbn === isbn);
  
    if (!selectedBook) {
      return;
    }
    if (selectedBook.availableStatus === 0) {
        alert("Book is not available for issue. Available Status is zero.");
        return;
      }
  
    const updatedBook = { ...selectedBook, availableStatus: selectedBook.availableStatus - 1 };
  
  
    dispatch(updateIssueBookInServer(updatedBook));
  
  
    dispatch(addIssueBookToServer({ isbn, registerNo, issueDate }));
    alert("Book Issued Successfully!");
  
    setIsbn('');
    setRegisterNo('');
    setIssueDate('');
  };
  
    
    const [searchIsbn, setSearchIsbn] = useState()//
    return (
        <>

            <div className='container-fluid'>
                <Form className='mt-4'>
                    <h1 className='text-center mb-4'>Issue Book</h1>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label htmlFor="bookIsbn">Book ISBN Number</Form.Label>
                            <Form.Control
                                type="text"
                                id="bookIsbn"
                                value={searchIsbn}
                                placeholder='Enter book ISBN no...'
                                onChange={(e) => setSearchIsbn(e.target.value)}
                            />
                        </Col>
                    </Row>

                </Form>
                {isLoading && <h1 className='m-5 p-5'>Loading...</h1>}
                {error && <p>Error: {error}</p>}
                {bookList
                    .filter((bookList) => bookList.isbn === searchIsbn)
                    .map((bookList) =>
                        <>
                            <div className='mt-4' key={bookList._id}>
                                <h2 className='text-center bg-dark rounded text-white p-3'>View Book Details</h2>
                                <h4 className='text-center mt-4 mb-4'>{bookList.title}</h4>
                                <Row className='mb-4'>
                                    <Col xs={12} lg={6} className='rounded'>
                                        <img src={bookList.bookImage ? bookList.bookImage : defaultBookImage} alt='BookImage' className='w-100' />
                                    </Col>
                                    <Col xs={12} lg={6} className='mt-2 d-flex flex-column gap-3 px-3 px-lg-5' style={{ lineHeight: "1.5" }}>
                                        <div>
                                            <h5>{bookList.author}</h5>
                                            <h5>{bookList.isbn}</h5>
                                            <h5>{bookList.edition}</h5>
                                        </div>
                                        <div className='border-lg-left p-lg-left-1'>
                                            <h5>{bookList.genre}</h5>
                                            <h5>{bookList.publicationYear}</h5>
                                            <h5>{bookList.availableStatus}</h5>
                                            <a onClick={() => {
                                                const isbnValue = `${bookList.isbn}`
                                                navigator.clipboard.writeText(isbnValue)
                                            }}
                                                style={{ textDecoration: 'underline' }}
                                            >Copy ISBN no</a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <form onSubmit={(e) => handleBookIssue(e)}>
                            <div className='mt-4'>
                                <h2 className='text-center bg-warning text-dark rounded p-3 mt-3 '>Select Student Detail for Issue Book</h2>
                                <Row className="mb-3 mt-4">
                                    <Col xs={12} md={6} lg={4}>
                                        <Form.Label htmlFor="isbn">ISBN Number</Form.Label>
                                        <Form.Control type="text" id="isbnNumber"
                                            value={isbn}
                                            onChange={(e) => setIsbn(e.target.value)}
                                            required
                                        />
                                    </Col>;
                                    <Col xs={12} md={6} lg={4}>
                                        <Form.Label htmlFor="registerNumber">Register Number</Form.Label>
                                        <Form.Control type="text" id="registerNumber"
                                            value={registerNo}
                                            onChange={(e) => setRegisterNo(e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col xs={12} md={6} lg={4}>
                                        <Form.Label htmlFor="issueDate">Issue Day</Form.Label>
                                        <Form.Control type="date" id="issueDate"
                                            value={issueDate}
                                            onChange={(e) => setIssueDate(e.target.value)}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Button variant="primary" type="submit" className='w-100 mt-3' >
                                    Book Issue
                                </Button>
                            </div>
                            </form>
                        </>
                    )
                }

            </div>
        </>

    );
};

export default BookIssueForm;



