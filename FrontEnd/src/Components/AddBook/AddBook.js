import React, { useEffect, useState,useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

import { addBookToServer } from '../../Slice/BookSlice';
import { useDispatch } from 'react-redux';
 
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios';
import { toast } from 'react-toastify';

const AddBookForm = () => {
  const hasToken = JSON.parse(localStorage.getItem('auth'));

  const dispatch = useDispatch()

  // State to hold book details
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [isbn, setIsbn] = useState();
  const [publicationYear, setPublicationYear] = useState();
  const [edition, setEdition] = useState();
  const [availableStatus, setAvailableStatus] = useState();

  const [bookImage, setBookImage] = useState("");
  
  const formik=useFormik({
    initialValues:{
      title:'',
      author:'',
      genre:'',
      isbn:'',
      publicationYear:'',
      edition:'',
      availableStatus:''
    },
    validationSchema:yup.object({
      title:yup.string()
      .strict()
      .trim()
      .required('Title is required'),
      author:yup.string()
      .strict()
      .trim()
      .required('Author name is required'),
      isbn:yup.string()
      .strict()
      .trim()
      .required('ISBN is required'),
      genre:yup.string()
      .strict()
      .trim()
      .required('Genre is required'),
      publicationYear:yup.number()
      .required('PublicationYear is required'),
      availableStatus:yup.number()
      .required('AvailableStatus is required'),
      edition:yup.number()
      .required('Edition is required'),
      
    }),
    onSubmit:(addBookData)=>{
      console.log("Form data",addBookData)
      try{
        const formData = new FormData();
        formData.append('title',addBookData.title);
        formData.append('author',addBookData.author)
        formData.append('genre',addBookData.genre)
        formData.append('isbn',addBookData.isbn)
        formData.append('publicationYear',addBookData.publicationYear)
        formData.append('edition',addBookData.edition)
        formData.append('availableStatus',addBookData.availableStatus)
        formData.append('bookImage',bookImage);
        console.log(formData)
        dispatch(addBookToServer(formData))
        toast.success("Success fully book added..");

      }catch(err){
        toast.error(err.message)
      }
      
    }
  })




  

  const cancelBook = (e) => {
    console.log('Cancel book');
    e.preventDefault()
    setTitle('');
    setAuthor('')
    setGenre('')
    setIsbn('')
    setPublicationYear('')
    setEdition('')
    setAvailableStatus('')
    setBookImage('')
  }

  const handleBookImage=(e)=>{
    if(e.target.name==='bookImage'){
      const reader=new FileReader;

      reader.onload=()=>{
        if(reader.readyState===2){
          setBookImage(e.target.files[0])
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }

  }
  return (
    <>
      <Form onSubmit={formik.handleSubmit} className='container'>
        <h1 className='mt-5'>ADD BOOK</h1>
        <div className="row d-flex justify-content-between  mt-3">
          <div className="col-sm-10 col-md-6">
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                
              />
            </Form.Group>
            {formik.errors.title?<div className='text-danger'>{formik.errors.title}</div>:null}
          </div>
          <div className="col-sm-10 col-md-6">
            <Form.Group controlId="formAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
              />
            </Form.Group>
            {formik.errors.author?<div className='text-danger'>{formik.errors.author}</div>:null}
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-3">
          <div className="col-sm-10 col-md-6">
            <Form.Group controlId="formGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"

                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
              />
            </Form.Group>

            {formik.errors.genre?<div className='text-danger'>{formik.errors.genre}</div>:null}
          </div>
          <div className="col-sm-10 col-md-6">
            <Form.Group controlId="formISBN">
              <Form.Label>ISBN</Form.Label>
              <Form.Control
                type="text"
                name="isbn"
                value={formik.values.isbn}
                onChange={formik.handleChange}
              />
            </Form.Group>
            {formik.errors.isbn?<div className='text-danger'>{formik.errors.isbn}</div>:null}
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-3">
          <div className="col-sm-10 col-md-6">
            <Form.Group controlId="formPublicationYear">
              <Form.Label>Publication Year</Form.Label>
              <Form.Control
                type="number"
                name="publicationYear"
                value={formik.values.publicationYear}
                onChange={formik.handleChange}
              />
            </Form.Group>
            
            {formik.errors.publicationYear?<div className='text-danger'>{formik.errors.publicationYear}</div>:null}
          </div>
          <div className="col-sm-10 col-md-6">
            <Form.Group controlId="formEdition">
              <Form.Label>Edition</Form.Label>
              <Form.Control
                type="number"
                name="edition"
                value={formik.values.edition}
                onChange={formik.handleChange}
              />
            </Form.Group>
            
            {formik.errors.edition?<div className='text-danger'>{formik.errors.edition}</div>:null}
          </div>
        </div>
        <div className="row d-flex justify-content-between mt-3">
          <div className="col-sm-10 col-md-6">
            <Form.Group controlId="formAvailableStatus">
              <Form.Label>Available Status</Form.Label>
              <Form.Control
                type="number"
                name="availableStatus"
                value={formik.values.availableStatus}
                onChange={formik.handleChange}
              />
            </Form.Group>

            {formik.errors.availableStatus?<div className='text-danger'>{formik.errors.availableStatus}</div>:null}
          </div>
          <div className="col-sm-10 col-md-6">
            <Form.Group controlId="formBookImage">
              <Form.Label>Book Image</Form.Label>
              <Form.Control
                type="file"
                name="bookImage"
                onChange={(e) => handleBookImage(e)}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-6 col-md-4 mb-3">
            <Button variant="primary" type="submit" >
              Add Book
            </Button>
          </div>
          <div className="col-sm-6 col-md-3 mb-3">
            <Button variant="danger" type="submit" onClick={(e) => cancelBook(e)}>
              Cancel
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AddBookForm;

