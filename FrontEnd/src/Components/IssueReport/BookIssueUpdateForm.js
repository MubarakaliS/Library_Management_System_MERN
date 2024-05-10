import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateIssueBookInServer } from '../../Slice/IssueBookSlice';
const BookReportUpdate = (props) => {
    const { selectedIssueBook } = useSelector((state) => state.issueBook)


    const [isbn, setIsbn] = useState();
    const [registerNo, setRegisterNo] = useState();
    const [issueDate, setIssueDate] = useState();

    const [id, setId] = useState();

    const dispatch = useDispatch();

    const updateIssueBook = () => {
        props.onHide();
        // console.log("updated");
        dispatch(updateIssueBookInServer({ id, isbn, registerNo, issueDate }))
    }

    useEffect(() => {
        if (Object.keys(selectedIssueBook).length !== 0) {
            setIsbn(selectedIssueBook.isbn)
            setIssueDate(selectedIssueBook.issueDate);
            setRegisterNo(selectedIssueBook.registerNo);
            setId(selectedIssueBook._id)
        }

    }, [selectedIssueBook])
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Issue Book Detail
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group controlId="formISBN">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter ISBN"
                            name="isbn"
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formRegisterNo">
                        <Form.Label>RegisterNo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter register no"
                            name="registerNo"
                            value={registerNo}
                            onChange={(e) => setRegisterNo(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="forIssueDate">
                        <Form.Label>Issue Date</Form.Label>
                        <Form.Control
                            type="date"
                            // placeholder="Enter Issue "
                            name="issueDate"
                            value={issueDate}
                            onChange={(e) => setIssueDate(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={(e) => updateIssueBook(e)}>
                    Update Issue Book
                </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BookReportUpdate