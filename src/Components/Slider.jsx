import Slidea from "../img/./slidea.jpg";
import Slideb from "../img/./slideb.jpg";
import Slidec from "../img/./slidec.jpg";

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Slidea} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>App Development</h5>
            <p>
              App Development: Creating Innovative and User-Friendly Mobile
              Applications.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Slideb} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Graphic Design</h5>
            <p>
              Graphic Design: Crafting Creative and Compelling Visual Solutions.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Slidec} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Web Development</h5>
            <p>
              Web Development: Building Engaging and Interactive Web
              Applications.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
