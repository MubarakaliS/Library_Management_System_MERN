import React, { useState, useRef } from "react";
import AdminLogin from "../Login/AdminLogin";
import UserLogin from "../Login/UserLogin";
import bookImage from "../../Assets/bookHeader.png";
import headerIcon from "../../Assets/headerIcon.png";
import Content2 from "./Content2";
import NewBook from "./NewBook";
import { useNavigate } from "react-router-dom";
import AboutHome from "./AboutHome";
import Faculties from "../Faculties";
import Footer from "../Footer";

const Content1 = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [userModalShow, setUserModalShow] = useState(false);
  const newBookRef = useRef(null);
  const aboutHomeRef = useRef(null);
  const facultiesRef = useRef(null);
  const footerRef = useRef(null);

  const handleMenuClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const Admin = () => {
    console.log("admin click");
    setModalShow(true);
  };

  const User = () => {
    console.log("User click");
    setUserModalShow(true);
  };

  return (
    <>
      <nav className="navbar" style={{ display: "block" }}>
        <div
          className="navbar-container sticky-top  mt-3 px-5"
          style={{ background: "white" }}
        >
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#home" className="navMenu">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navMenu">
                About
              </a>
            </li>
            <li>
              <a href="#faculties" className="navMenu">
                Faculties
              </a>
            </li>
            <li>
              <a href="#newBook" className="navMenu">
                New Book
              </a>
            </li>
            <li className="lg-mx-2">
              <a hred="#" id="login" title="Admin Login" onClick={Admin}>
                <i class="mx-1 bi bi-person-gear"></i>
              </a>
            </li>
            <li>
              <a hred="#" id="loginUser" title="User Login" onClick={User}>
                <i class="mx-1 bi bi-box-arrow-in-right"></i>
              </a>
            </li>
          </ul>
          <h1 data-aos="fade-right" data-aos-duration="2000" className="logo">
            <span className="mx-3 headerLogo">
              <img
                src={headerIcon}
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundPosition: "cover",
                }}
              />
            </span>
            MCA
          </h1>
        </div>
        <AdminLogin show={modalShow} onHide={() => setModalShow(false)} />
        <UserLogin
          show={userModalShow}
          onHide={() => setUserModalShow(false)}
        />

        <div className="main-Content row">
          <div
            className="pl-1 parallex p-0 d-flex"
            style={{
              backgroundColor: "rgb(31, 236, 219)",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <img src={bookBackground} alt='BookImage' className='img-fluid' style={{height:"100%",width:"100%",backgroundSize:'cover'}}/> */}

            <div
              className="main-1-content"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <center>
                <h3>THE BOOK LOVER</h3>
                <p className="lead">READ ALL ABOUT IT</p>
              </center>
            </div>
          </div>
        </div>
        <div className="row mt-5 m-0 p-0" style={{ height: "auto" }}>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-12 col-sm-6 col-sm-mt-5 col-sm-mb-5"
            style={{ padding: "5%" }}
          >
            <h1 style={{ fontSize: "clamp(30px,3vw,82px)" }}>
              All the world's a stage And all the men and womens merely players
            </h1>
            <p className="lead mt-4" style={{ textAlign: "right" }}>
              -William Shakespeare
            </p>
          </div>
          <div className="col-12 col-sm-6">
            <center>
              <img
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                className="img-fluid p-3"
                src={bookImage}
                alt="bookImage"
              />
            </center>
          </div>
        </div>
      </nav>
      <div ref={newBookRef} id="newBook">
        <NewBook />
      </div>
      <div ref={aboutHomeRef} id="about">
        <AboutHome />
      </div>
      <div className="main-Content row">
        <div
          className="pl-2 parallex p-0 d-flex"
          style={{
            backgroundColor: "rgb(31, 236, 219)",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src={bookBackground} alt='BookImage' className='img-fluid' style={{height:"100%",width:"100%",backgroundSize:'cover'}}/> */}

          <div
            className="main-1-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <center>
              <h3>THE BOOK TEACH YOU</h3>
              <p className="lead">READ ALL ABOUT IT</p>
            </center>
          </div>
        </div>
      </div>
      <div ref={facultiesRef} id="faculties">
        <Faculties />
      </div>
      <div ref={footerRef} id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Content1;

