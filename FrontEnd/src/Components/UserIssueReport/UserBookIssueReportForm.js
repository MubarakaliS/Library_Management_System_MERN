import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getIssueBookFromServer } from '../../Slice/IssueBookSlice';
import { getUserFromServer } from '../../Slice/UserSlice'; // Import the action to fetch user data
import { getBookFromServer } from '../../Slice/BookSlice';
const UserBookIssueReportForm = () => {
    const { issueBookList, bookList, userList } = useSelector((state) => ({
        issueBookList: state.issueBook.issueBookList,
        bookList: state.books.bookList,
        userList: state.users.userList, // Assuming you have a userList in your state
        error: state.issueBook.error,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getIssueBookFromServer());
            await dispatch(getBookFromServer());
            await dispatch(getUserFromServer()); // Fetch user data
        };

        fetchData();
    }, [dispatch]);

    const userInfo = JSON.parse(localStorage.getItem('user'));

    // Check if userInfo is defined before accessing its properties
    if (!userInfo) {
        return (
            <div>
                Loading user information...
            </div>
        );
    }


    const regNo = userInfo.userRegisterNo;
    const particularUser = issueBookList.filter((user) => user.registerNo === regNo);

    const getBookDetailsByISBN = (isbn) => {
        const bookTitle = bookList.find((book) => book.isbn === isbn);
        return bookTitle ? bookTitle.title : null;
    };

    const getUserNameByRegisterNo = (registerNo) => {
        const user = userList.find((user) => user.registerNo === registerNo);
        return user ? user.studentName : 'User not found';
    };

    const getAvailableStatusbyISBN = (isbn) => {
        const isAvailable = bookList.find((book) => book.isbn === isbn)
        return isAvailable ? isAvailable.availableStatus : 'Not Available'
    }

    return (
        <>
            <h2 className='mt-4 mb-4'>Book Issue Report</h2>
            <Table striped hover>
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
                    </tr>
                </thead>
                <tbody>
                    {particularUser.length > 0 ? (
                        particularUser.map((user, index) => {
                            const bookDetails = getBookDetailsByISBN(user.isbn);
                            // const bookTitle=bookDetails.title;
                            const userName = getUserNameByRegisterNo(user.registerNo);
                            const availableStatus = getAvailableStatusbyISBN(user.isbn)


                            const createDate = new Date(user.createdAt)
                            const createDateString = createDate.toLocaleDateString()

                            const returnDate = new Date(user.issueDate);
                            const returnDateString = returnDate.toLocaleDateString()

                            return (
                                <tr key={user.issueId} className='text-center'>
                                    <td className=' p-2'>{index + 1}</td>
                                    <td className=' p-2'>{userName}</td>
                                    <td className=' p-2'>{user.registerNo}</td>
                                    <td className=' p-2'>{bookDetails}</td>
                                    <td className=' p-2'>{user.isbn}</td>
                                    <td className=' p-2'>{createDateString}</td>
                                    <td className=' p-2'>{returnDateString}</td>
                                    <td className=' p-2'>{availableStatus}</td>
                                </tr>
                            )

                        })
                    ) : (
                        <tr>
                            <td colSpan="8">No issued books found for the user.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default UserBookIssueReportForm;
