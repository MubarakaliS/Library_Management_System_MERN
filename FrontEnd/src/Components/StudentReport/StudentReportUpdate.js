import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInServer } from '../../Slice/UserSlice';
const StudentReportUpdate = (props) => {
    const {selectedUser}=useSelector((state)=>state.users)
    const dispatch = useDispatch();
    
    const [studentName, setStudentName] = useState();
    const [branch, setBranch] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [photo, setPhoto] = useState();
    const [email, setEmail] = useState();
    const [registerNo, setRegisterNo] = useState();

    
    const [id,setId]=useState();

    const updateStudent = () => {
        console.log("Student updated");
        props.onHide();
        dispatch(updateUserInServer({id,studentName,branch,mobileNumber,photo,email,registerNo}))
    }
    useEffect(()=>{
        if(Object.keys(selectedUser).length!==0){
            setStudentName(selectedUser.studentName)
            setBranch(selectedUser.branch)
            setMobileNumber(selectedUser.mobileNumber)
            setPhoto(selectedUser.photo)
            setRegisterNo(selectedUser.registerNo)
            setEmail(selectedUser.email)
            setId(selectedUser._id);
        }
    },[selectedUser])
    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Student Update Detail
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formStudentName">
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Student Name"
                                name="studentName"
                            value={studentName}
                            onChange={(e)=>setStudentName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formRegisterNo">
                            <Form.Label>Register Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Register Number"
                                value={registerNo}
                                onChange={(e)=>setRegisterNo(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email ID"
                                name="emailId"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhoneNo">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Phone Number"
                                name="phoneNo"
                                value={mobileNumber}
                                onChange={(e)=>setMobileNumber(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={(e) => updateStudent(e)}>
                        Update Student
                    </Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default StudentReportUpdate