import React, { useEffect, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBookFromServer, updateIssueBookInServer } from '../../Slice/BookSlice';
import { getUserFromServer } from '../../Slice/UserSlice'; // Import the action to fetch user data
import { getIssueBookFromServer, deleteIssueBookFromServer, removeIssueBookFromList } from '../../Slice/IssueBookSlice';
const BookIssueReportForm = () => {
  const { issueBookList, bookList, userList } = useSelector((state) => ({
    issueBookList: state.issueBook.issueBookList,
    bookList: state.books.bookList,
    userList: state.users.userList, // Assuming you have a userList in your state
    error: state.issueBook.error,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIssueBookFromServer());
    dispatch(getBookFromServer());
    dispatch(getUserFromServer()); // Fetch user data
  }, [dispatch]);
  const deleteIssueBook = (book) => {

    alert('DELETED THE ISSUE BOOK SUCCESSFULLY');
    // console.log("Delete Book");
    const selectedBook = bookList.find((books) => books.isbn === book.isbn);

    if (!selectedBook) {
      return;
    }
    const updatedBook = { ...selectedBook, availableStatus: selectedBook.availableStatus + 1 };


    dispatch(updateIssueBookInServer(updatedBook));
    dispatch(deleteIssueBookFromServer(book))
      .unwrap()
      .then(() => {
        dispatch(removeIssueBookFromList(book))

      })

  }
  const getBookDetailsByISBN = (isbn) => {
    const bookTitle = bookList.find((book) => book.isbn === isbn);
    return bookTitle ? bookTitle.title : null;
  };

  const getUserNameByRegisterNo = (registerNo) => {
    const user = userList.find((user) => user.registerNo === registerNo);
    return user ? user.studentName : 'User not found';
  };
  const getAvailableStutas = (isbn) => {
    const isAvailable = bookList.find((book) => book.isbn === isbn);
    return isAvailable ? isAvailable.availableStatus : 'NOT AVAILABLE'
  }
  const [searchTitle, setSearchTitle] = useState('')

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10)
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = issueBookList
    .filter((book) =>
      searchTitle === '' || book.registerNo.toLowerCase().includes(searchTitle.toLowerCase())
    )
    .slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-4">
      <h2 className='mb-4 text-center'>Return Issue Book Report</h2>
      <div>
        <Form className='m-4'>
          <Form.Group className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search student register no..."
              className="flex-grow-1 p-3 mt-2"
              id="bookTitle"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <Table responsive striped hover>
        <thead>
          <tr className='text-center'>
            <th className=' p-3'>S.No</th>
            <th className=' p-3'>Issue Name</th>
            <th className=' p-3'>Register No</th>
            <th className=' p-3'>Book Name</th>
            <th className=' p-3'>ISBN No</th>
            <th className=' p-3'>Issue Date</th>
            <th className=' p-3'>Return Date</th>
            <th className=' p-3'>Available Status</th>
            <th className=' p-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks
            .map((book, index) => {

              const bookDetails = getBookDetailsByISBN(book.isbn);
              // const bookTitle=bookDetails.title;
              const userName = getUserNameByRegisterNo(book.registerNo);
              const availableStatus = getAvailableStutas(book.isbn);

              const createDate = new Date(book.createdAt)
              const createDateString = createDate.toLocaleDateString()

              const returnDate = new Date(book.issueDate);
              const returnDateString = returnDate.toLocaleDateString()
              return (
                <tr key={book._id} className='text-center'>
                  <td className=' p-2'>{index + 1}</td>
                  <td className=' p-2'>{userName}</td>
                  <td className=' p-2'>{book.registerNo}</td>
                  <td className=' p-2'>{bookDetails}</td>
                  <td className=' p-2'>{book.isbn}</td>
                  <td className=' p-2'>{createDateString}</td>
                  <td className=' p-2'>{returnDateString}</td>
                  <td className=' p-2'>{availableStatus}</td>
                  <td className=' p-2'>
                    <a className='mx-2 fs-5' title='Delete' onClick={() => deleteIssueBook(book)}>
                      <i className='bi bi-trash3' />
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
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
  );
};

export default BookIssueReportForm;
