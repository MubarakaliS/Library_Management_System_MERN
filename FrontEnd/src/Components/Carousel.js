import Image1 from './ExampleCarouselImage/images (11) (1).jpeg';
import Carousel from 'react-bootstrap/Carousel';
import Image2 from './ExampleCarouselImage/images (11).jpeg';
import Image3 from './ExampleCarouselImage/images (7).jpeg';
import Background from './ExampleCarouselImage/background (2).jpg'

function CarouselView() {
  return (
    <Carousel style={{"display":"flex","justifyContent":"center"}}>
      <Carousel.Item interval={1000}>
        {/* <Image1  /> */}
        {/* <div style={{"backgroundImage":{Background},"backgroundSize":"contain"}}></div> */}
        <img src={Background} alt='Slide Image1' style={{"height":"100%","width":"100%"}} text="First slide"/>
        <Carousel.Caption style={{"zIndex":"1"}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <Image2 text="Second slide" /> */}
        <img src={Background} alt='Slide Image1' style={{"height":"100%","width":"100%"}}/>
        {/* <div style={{"height":"100%"}}>
        <img src={Background} alt='Slide Image1' style={{"height":"100%","width":"100%"}}/>
        </div> */}
        <Carousel.Caption style={{"zIndex":"1"}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <Image3 text="Third slide" /> */}
        <img src={Background} alt='Slide Image1' style={{"height":"100%","width":"100%"}}/>
        {/* <div style={{"backgroundImage":{Background},"backgroundSize":"cover","height":"100%"}}></div> */}
        <Carousel.Caption style={{"zIndex":"1"}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, kvel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default CarouselView;