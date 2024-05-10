import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateBookInServer } from "../../Slice/BookSlice";
const BookReportUpdate = (props) => {
  const { selectedBook } = useSelector((state) => state.books);

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [isbn, setIsbn] = useState();
  const [publicationYear, setPublicationYear] = useState();
  const [edition, setEdition] = useState();
  const [availableStatus, setAvailableStatus] = useState();

  const [id, setId] = useState();

  const dispatch = useDispatch();

  const updateBook = () => {
    props.onHide();
    // console.log("updated");
    // console.log("Book image",bookImage)
    dispatch(
      updateBookInServer({
        id,
        title,
        author,
        genre,
        isbn,
        publicationYear,
        edition,
        availableStatus,
        // bookImage,
      })
    );
  };
  const handlePublicationYearChange = (e) => {
    let inputYear = e.target.value.replace(/\D/g, "");

    // Ensure the input is a four-digit number
    if (/^\d{0,4}$/.test(inputYear)) {
      // Set only the valid year in the state
      setPublicationYear(inputYear);
    }
  };
  useEffect(() => {
    if (Object.keys(selectedBook).length !== 0) {
      setTitle(selectedBook.title);
      setAuthor(selectedBook.author);
      setGenre(selectedBook.genre);
      setIsbn(selectedBook.isbn);
      setPublicationYear(selectedBook.publicationYear);
      setEdition(selectedBook.edition);
      setAvailableStatus(selectedBook.availableStatus);
      setId(selectedBook._id);
    }
  }, [selectedBook]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Book Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBookTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAuthorName">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author name"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

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

          <Form.Group controlId="formEdition">
            <Form.Label>Edition</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter edition"
              name="edition"
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGenre">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter genre"
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPublicationYear">
            <Form.Label>Publication Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter publication year"
              name="publicationYear"
              value={publicationYear}
              onChange={(e) => handlePublicationYearChange(e)}
            />
          </Form.Group>

          <Form.Group controlId="formAvailability">
            <Form.Label>Availability</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter availability"
              name="availability"
              value={availableStatus}
              onChange={(e) => setAvailableStatus(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={(e) => updateBook(e)}>
          Update Book
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookReportUpdate;
