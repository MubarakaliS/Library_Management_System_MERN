import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import BookReportUpdate from './BookReportUpdate';
import { addSelectedBook, deleteBookFromServer, getBookFromServer, removeBookFromList } from '../../Slice/BookSlice';
import { toast } from 'react-toastify';
import defaultBookImage from '../../Assets/BookIcon.png';


const BookReportForm = () => {
    const { bookList, error } = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);

    const updateBook = (book) => {
        setModalShow(true);
        dispatch(addSelectedBook(book));
    };

    const deleteBook = (book) => {
        dispatch(deleteBookFromServer(book))
            .unwrap()
            .then(() => {
                dispatch(removeBookFromList(book));
            });
        toast.success("Successfully deleted book.");
        alert("Successfully deleted book...")
    };

    useEffect(() => {
        dispatch(getBookFromServer());
    }, [dispatch]);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = bookList
        .filter((book) =>
            searchTitle === '' || book.title.toLowerCase().includes(searchTitle.toLowerCase())
        )
        .slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <h1 className='mt-5 text-center'>BOOK REPORT</h1>
            <p className='text-center lead'>{`Currently ${bookList.length} books in the library`}</p>
            <div>
                <Form className='mt-4'>
                    <Form.Group className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search..."
                            className="flex-grow-1 p-3 mt-2"
                            id="bookTitle"
                            value={searchTitle}
                            onChange={(e) => setSearchTitle(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </div>
            {error && <h2 className='m-5 text-danger text-center'>{error}</h2>}
            <div className='template'>
                {currentBooks.map((book) => (
                    <div key={book._id} className='row d-flex justify-content-around gap-2 mt-4' style={{ wordBreak: "break-all", height: "auto" }}>
                        <div className='col-xxl-10 col-lg-11 col-xs-12'>
                            <Card className='d-flex flex-column flex-md-row'>
                                <div className='col-12 col-lg-6' style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ backgroundImage: `url(${book.bookImage})`, flex: 1, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                        <img
                                            src={book.bookImage ? book.bookImage : defaultBookImage}
                                            alt="Book Preview"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                                <div className='col-11 col-lg-6 mx-2' style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Card.Body style={{ flex: 1 }}>
                                        <Card.Title className='mt-3 mb-3' >{book.title}</Card.Title>
                                        <Card.Text className='d-flex flex-row gap-3' style={{ flex: 1 }}>
                                            <div style={{ flex: 1 }}>
                                                <p title="Author name">{book.author}</p>
                                                <p title="ISBN Number">{book.isbn}</p>
                                                <p title='Book Edition'>{book.edition}</p>
                                            </div>
                                            <div className='border-lg-left p-lg-right-1' style={{ flex: 1 }}>
                                                <p title='Book Genre'>{book.genre}</p>
                                                <p title='Publication Year'>{book.publicationYear}</p>
                                                <p title='Available'>Available: {book.availableStatus}</p>
                                            </div>
                                        </Card.Text>
                                        <Button variant="primary" className='mx-2 mt-2' onClick={() => updateBook(book)}><i className='bi bi-pencil-square' /></Button>
                                        <Button variant="danger" className='mt-2' onClick={() => deleteBook(book)}><i className='bi bi-trash3' /></Button>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
            <BookReportUpdate show={modalShow} onHide={() => setModalShow(false)} />
            <ul className="pagination justify-content-center mt-3">
                {[...Array(Math.ceil(bookList.length / booksPerPage)).keys()].map((number) => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number + 1)} className="page-link">
                            {number + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default BookReportForm;
