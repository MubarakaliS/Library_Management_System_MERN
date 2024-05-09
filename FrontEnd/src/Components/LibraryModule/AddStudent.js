import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserToServer } from '../../Slice/UserSlice';

import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios';
import { toast } from 'react-toastify';


const AddStudentForm = () => {

    const dispatch = useDispatch();

    const [studentName, setStudentName] = useState();
    const [branch, setBranch] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [userImage, setUserImage] = useState();
    const [email, setEmail] = useState();
    const [registerNo, setRegisterNo] = useState();


    const formik = useFormik({
        initialValues: {
            studentName: '',
            branch: '',
            email: '',
            registerNo: ''
        },
        validationSchema: yup.object({
            studentName: yup.string()
                .strict()
                .trim()
                .required('Student Name is required'),
            branch: yup.string()
                .required('Branch is required'),
            email: yup.string()
                .email()
                .required('Email is required'),
            registerNo: yup.string()
                .required("Register Number is required")
        }),
        onSubmit: (addStudentData) => {
            console.log("Form data", addStudentData)
            
                const formData = new FormData();
                formData.append('studentName', addStudentData.studentName);
                formData.append('branch', addStudentData.branch)
                formData.append('email', addStudentData.email)
                formData.append('mobileNumber', mobileNumber)
                formData.append('registerNo', addStudentData.registerNo)
                formData.append('userImage',userImage)
                console.log(userImage)
                dispatch(addUserToServer(formData))
                toast.success("Success fully book added..");
            
        }
    })

    const addUser = (e) => {
        e.preventDefault();

        dispatch(addUserToServer({ studentName, registerNo, branch, userImage, email, mobileNumber }))


        // Reset form fields
        setStudentName('');
        setBranch('');
        setMobileNumber('');
        setUserImage(null);
        setEmail('');
        setRegisterNo('');
    };
    const cancelUser = (e) => {
        e.preventDefault()
        setStudentName('');
        setBranch('');
        setMobileNumber('');
        setUserImage(null);
        setEmail('');
        setRegisterNo('');
    }

    const handleUserImage = (e) => {
        if (e.target.name === 'userImage') {
            const reader = new FileReader;

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setUserImage(e.target.files[0])
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }

    }

    return (
        <form onSubmit={formik.handleSubmit} >
            <div className=' container mb-3 '>
                <h2 className='mt-5'>ADD NEW STUDENT </h2>
            </div>
            <div className="container justify-content-around" >
                <div className="row d-flex justify-content-between">
                    <div className="col-sm-10 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Student Name:</label>
                            <input type="text" name='studentName' className="form-control" value={formik.values.studentName} onChange={formik.handleChange} />
                            {formik.errors.studentName ? <div className='text-danger'>{formik.errors.studentName}</div> : null}
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Register No:</label>
                            <input type="text" name='registerNo' className="form-control" value={formik.values.registerNo} onChange={formik.handleChange}  />
                            {formik.errors.registerNo ? <div className='text-danger'>{formik.errors.registerNo}</div> : null}
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-10 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Branch:</label>
                            <select className="form-select" name='branch' value={formik.values.branch} onChange={formik.handleChange}>
                                <option value="">Select Branch</option>
                                <option value="MCA">MCA</option>
                                <option value="MA TAMIL">MA TAMIL</option>
                                <option value="MA ENGLISH">MA ENGLISH</option>
                            </select>
                            {formik.errors.branch ? <div className='text-danger'>{formik.errors.branch}</div> : null}
                        </div>
                    </div>

                    <div className="col-sm-10 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Photo:</label>
                            <input type="file" name='userImage' className="form-control" onChange={(e) => handleUserImage(e)} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="email" name='email' className="form-control" value={formik.values.email} onChange={formik.handleChange}  />
                            {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Mobile Number:</label>
                            <input
                                type="tel"
                                name='mobileNumber'
                                className="form-control"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value.slice(0, 10))}
                                maxLength="10"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 col-md-6 col-md-4 mt-3"><button type="submit" className="btn btn-primary" >Add Student</button></div>
                    <div className="col-sm-5 col-md-6 col-md-3 mt-3"><button type="button" className="btn btn-secondary" onClick={(e) => cancelUser(e)}>Cancel</button></div>
                </div>


            </div>

        </form>
    );
};

export default AddStudentForm;
