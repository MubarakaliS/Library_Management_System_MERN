import { useState } from "react";
import AdminLogin from "./Login/AdminLogin";
import UserLogin from "./Login/UserLogin";

const Footer = () => {
  const [modalShow, setModalShow] = useState(false);
  const [userModalShow, setUserModalShow] = useState(false);
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row align-items-top text-left text-white bg-dark p-5">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">
              <h3 data-aos="fade-up" data-aos-duration="1000">
                <strong>Menu</strong>
              </h3>
              <nav
                className="nav flex-column"
                data-aos="zoom-out-right"
                data-aos-duration="1000"
              >
                <a
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  className="nav-link active"
                  href="#"
                >
                  Home
                </a>
                <a
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  className="nav-link"
                  href="#about"
                >
                  About
                </a>
                <a
                  data-aos="zoom-out-right"
                  data-aos-duration="1000"
                  className="nav-link"
                  href="#faculties"
                >
                  Faculties
                </a>
                <a className="nav-link" href="#newBook">
                  New Book
                </a>
              </nav>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
              <h3 data-aos="fade-up" data-aos-duration="1000">
                <strong>Sign-In</strong>
              </h3>
              <nav className="nav flex-column">
                <a
                  data-aos="zoom-in-left"
                  data-aos-duration="1000"
                  className="nav-link active bg-primary text-white text-center p-2 mt-3 mx-3 "
                  style={{ width: "70%", borderRadius: "20px" }}
                  onClick={() => setUserModalShow(true)}
                >
                  User Login
                </a>
                <a
                  data-aos="zoom-in-left"
                  data-aos-duration="1000"
                  className="nav-link active bg-secondary text-white text-center p-2 mt-3 mx-3"
                  style={{ width: "70%", borderRadius: "20px" }}
                  onClick={() => setModalShow(true)}
                >
                  Admin Login
                </a>
              </nav>
            </div>

            <div className="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0">
              <h3 data-aos="fade-up" data-aos-duration="1000">
                <strong>About Us</strong>
              </h3>
              <p className="mt-4" data-aos="fade-down" data-aos-duration="1000">
                "The more that you read, the more things you will know. The more
                that you learn, the more places you'll go."
              </p>
              <p style={{ textAlign: "right" }}>- Dr. Seuss.</p>
            </div>
          </div>
        </div>
      </footer>
      <AdminLogin show={modalShow} onHide={() => setModalShow(false)} />
      <UserLogin show={userModalShow} onHide={() => setUserModalShow(false)} />
    </>
  );
};

export default Footer;
