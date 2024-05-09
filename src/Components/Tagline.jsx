import { FaCode } from "react-icons/fa6";
import { IoMdAppstore } from "react-icons/io";
import { DiPhotoshop } from "react-icons/di";
import Growt from "../img/./growt.jpg";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Tagline = () => {
  return (
    <div className="container-fluid">
      {/* Tagline */}
      <div className="row">
        <div className="col-12">
          <h3 className="display-6 text-center mt-3 mb-2">
            Transferring Your Vision into Digital Reality: Offering Expert
            <br />
            Web Development, App Creation, and Graphic Design Services.
          </h3>
        </div>
      </div>
      {/* Features */}
      <div className="row justify-content-evenly pt-3 pb-3">
        <div className="col-md-3 text-center mt-4">
          <h1>
            <FaCode className="bi bi-file-code-fill text-primary" />
          </h1>
          <h5>Web Development Expert</h5>
          <p>
            A web development expert possesses in-depth knowledge of programming
            languages, frameworks, and tools to create dynamic and responsive
            websites that engage visitors.
          </p>
        </div>
        <div className="col-md-3 text-center mt-4">
          <h1>
            <IoMdAppstore className="bi bi-google-play text-danger"></IoMdAppstore>
          </h1>
          <h5>App Development Specialist</h5>
          <p>
            An app development specialist uses programming languages, SDKs, and
            development tools to create innovative and user-friendly mobile
            applications for Android and iOS platforms.
          </p>
        </div>
        <div className="col-md-3 text-center mt-4">
          <h1>
            <DiPhotoshop className="bi bi-palette-fill text-success"></DiPhotoshop>
          </h1>
          <h5>Creative Graphic Designer</h5>
          <p>
            A creative graphic designer possesses strong artistic skills and
            uses specialized software to create visually appealing designs for
            various mediums, such as print and digital media.
          </p>
        </div>
      </div>

      {/* Line */}
      <hr />

      {/* Growth Section */}
      <div className="row justify-content-evenly pt-3 pb-5">
        <div className="col-md-5 pt-3">
          <img src={Growt} className="img-fluid" alt="" />
        </div>
        <div className="col-md-5 pt-3">
          <h5 className="mt-3">Web development</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-success"
              style={{ width: "90%" }}
            ></div>
          </div>

          <h5 className="mt-3">App development</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-info"
              style={{ width: "60%" }}
            ></div>
          </div>

          <h5 className="mt-3">Graphics designing</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-warning"
              style={{ width: "75%" }}
            ></div>
          </div>

          <h5 className="mt-3">Software development</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Danger example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-danger"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>
      {/* Growth Section End */}

      {/* Contact Us */}
      <div
        className="row justify-content-evenly pt-2 pb-5"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="col-md-5 mt-5">
          <h3 className="mb-3">Contact Form</h3>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-5 mt-5">
          <h3 className="mb-4">Address</h3>
          <p>
            #473GF, Sector 28, Panchkula Extension,
            <br />
            Haryana - 134116
            <br />
            <i className="bi bi-telephone"></i> : 022-659-13065
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.571742639794!2d76.88014472453291!3d30.646024839819844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f957f10e8e391%3A0x6c0e6b3a5746eec1!2sAshiana%20complex!5e0!3m2!1sen!2sin!4v1678799272493!5m2!1sen!2sin"
            style={{ width: "100%", height: "250px", border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* FAQ */}
      <div className="row justify-content-evenly pt-4 pb-4">
        <div className="col-md-10">
          <h3 className="text-center pb-4">FAQ</h3>

          <div
            className="accordion accordion-flush border"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Q: What is web development and why is it important for my
                  website?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A: Web development is the process of creating, building, and
                  maintaining websites. It involves a range of skills and
                  technologies such as HTML, CSS, JavaScript, and various
                  programming languages. Web development is important for your
                  website because it helps ensure that your site is functional,
                  user-friendly, and aesthetically appealing. It also allows you
                  to add features and functionality that can enhance the user
                  experience and meet your specific business needs. Without web
                  development, your website may not function properly, be
                  difficult to navigate, or fail to attract and retain visitors.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Q: What are the benefits of app development for businesses?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A: App development can help businesses increase customer
                  engagement, generate additional revenue streams, and improve
                  brand visibility. Apps also offer features like push
                  notifications and location-based services, which can help
                  businesses create a more personalized experience for their
                  customers.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Q: What are the key components of web development?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A: The key components of web development include programming
                  languages such as HTML, CSS, and JavaScript, as well as
                  various software tools and frameworks. Web developers also
                  need to have a good understanding of user experience (UX) and
                  user interface (UI) design, as well as search engine
                  optimization (SEO) and web security.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="row justify-content-evenly bg-dark text-white pt-2 pb-3">
        <div className="col-md-3 pt-4">
          <h5>GIRIVISION</h5>
          <p>
            Girivision provides innovative tech and business content. Stay
            informed with our quality website and valuable resources. Explore
            now to stay up-to-date.
          </p>
        </div>
        <div className="col-md-3 pt-4">
          <h5 className="pb-2">Important Links</h5>
          <p>
            <a href="#" className="link-light text-decoration-none">
              Home
            </a>
            <br />
            <a href="#" className="link-light text-decoration-none">
              About Us
            </a>
            <br />
            <a href="#" className="link-light text-decoration-none">
              Contact Us
            </a>
            <br />
            <a href="#" className="link-light text-decoration-none">
              Our Team
            </a>
            <br />
          </p>
        </div>
        <div className="col-md-3 pt-4">
          <h5 className="pb-2">Contact Us</h5>
          <a
            href="https://www.instagram.com/ranaaaa__07/"
            target="_blank"
            class="bi bi-instagram link-light text-decoration-none"
          >
            instagram
          </a>
          <br />
          <a
            href="https://github.com/randeeprana"
            target="_blank"
            class="bi bi-github link-light text-decoration-none"
          >
            github
          </a>
          <br />
          <a
            href="https://twitter.com/Randeep_rana7"
            target="_blank"
            class="bi bi-twitter link-light text-decoration-none"
          >
            twitter
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/randeep-rana-705a09245/"
            target="_blank"
            class="bi bi-linkedin link-light text-decoration-none"
          >
            linkedin
          </a>
          <br />
        </div>
      </div>
      {/* Copyright */}
      <div className="row bg-secondary text-white text-center p-2">
        <div className="col-12">
          <p>
            <em>
              Copyright ©2024 All rights reserved | This site is made with ❤ by
              RANDEEP RANA
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tagline;
