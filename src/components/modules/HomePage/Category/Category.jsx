import React, { Component } from "react";
import Slider from "react-slick";
import Cat1 from "../../../../assets/image/category-t-shirt.png";
import Cat2 from "../../../../assets/image/category-shorts.png";
import Cat3 from "../../../../assets/image/category-jacket.png";
import Cat4 from "../../../../assets/image/category-pants.png";
import Cat5 from "../../../../assets/image/category-suit.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./category.css";

class App extends Component {
  render() {
    const settings = {
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <div className="container">
        <div className="title mt-5 pl-5">
          <h2>Category</h2>
          <p>What are you currently looking for?</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="slide-section">
              <Slider {...settings}>
                <div>
                  <img style={{ zIndex:"1000" }} src={Cat1} alt="Cat 1" />
                </div>
                <div>
                  <img src={Cat2} alt="Cat 2" />
                </div>
                <div>
                  <img src={Cat3} alt="Cat 3" />
                </div>
                <div>
                  <img src={Cat4} alt="Cat 4" />
                </div>
                <div>
                  <img src={Cat5} alt="Cat 5" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
