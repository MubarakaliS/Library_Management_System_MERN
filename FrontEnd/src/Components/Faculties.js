import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultImage from '../Assets/WomenIcon.png'
import './Faculties.css'
function Faculties() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row text-center justify-content-center mt-4">
            <div className="col-8">
              <h1 data-aos="zoom-in-down" data-aos-duration="1000">Our Faculties</h1>
            </div>
          </div>

          <div className="row-50"></div>

          <div className="row text-center justify-content-around p-5">
            <div className="col-9 col-sm-4 m-sm-auto col-lg-p-5">
              <img data-aos="zoom-out-up" data-aos-duration="1000" alt="image" className="img-fluid facultie-image rounded-circle p-3" src={defaultImage} />

              <h3 className='text-center'>Dr.R.A.Roseline</h3>
              <p className='text-center lead'>Associative Proffesser & Head</p>
            </div>

            <div className="col-9 col-sm-4  m-sm-auto col-lg-p-5">
              <img data-aos="zoom-out-up" data-aos-duration="1000" alt="image"  className="img-fluid  facultie-image rounded-circle p-3" src={defaultImage} />

              <h3 className='text-center'>Dr.K.Aarthi</h3>
              <p className='text-center lead'>Assistent Proffesser</p>
            </div>

            <div className="col-9 col-sm-4 m-sm-auto col-lg-p-5">
              <img data-aos="zoom-out-up" data-aos-duration="1000" alt="image"  className="img-fluid facultie-image rounded-circle p-3" src={defaultImage} />
              <h3 className='text-center'>Dr.R.Vidyabanu</h3>
              <p className='text-center lead'>Assistent Proffesser</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faculties;