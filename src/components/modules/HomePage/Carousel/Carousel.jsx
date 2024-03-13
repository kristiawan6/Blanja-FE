import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../../../assets/image/slide1.png";
import Slide2 from "../../../../assets/image/slide2.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function SlideCarousel() {
  return (
    <div className="container pt-5">
      <div className="header">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={Slide1} alt="First slide" />
            <Carousel.Caption>
              <h1 className="fw-bold mb-5">Black Edition</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={Slide2} alt="Second slide" />
            <Carousel.Caption>
              <h1 className="fw-bold mb-5">Trends in 2020</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default SlideCarousel;
