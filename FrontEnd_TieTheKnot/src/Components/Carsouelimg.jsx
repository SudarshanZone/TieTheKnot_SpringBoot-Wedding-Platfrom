import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./Image/Img1.jpg";
import image2 from "./Image/Img2.jpg";
import image3 from "./Image/Img3.jpg";


const imgStyle = {
  objectFit: "cover", // Maintain aspect ratio and cover the container
  maxHeight: "500px", // Set the maximum height as per your requirement
};

const CourseCard = ({ imgSrc, title, description, btnColor , externalImgLink}) => (
  <div className="col-lg-4" style={{ marginBottom: "20px" }}>
    <div className="card" style={{ width: "380px", height: "550px", display: "flex", flexDirection: "column", backgroundColor: "#FED9ED" }}>
      <img
        style={{ borderRadius: "10px", flex: "1 1 auto" }}
        src={externalImgLink || imgSrc}
        className="card-img-top"
        alt="..."
      />
      <br />
      <b>
        <center>
          <h6 className="card-title">{title}</h6>
        </center>
      </b>
      <div className="card-body d-flex flex-column">
        <i>
          <p className="card-text">{description}</p>
        </i>
        <br />

        <div className="mt-auto">
          <center>
            <a
              href="/add"
              className="btn"
              style={{ backgroundColor: btnColor, color: "#ffffff" }}
              data-bs-toggle="modal"
              data-bs-target="#courses"
            >
              Book Now
            </a>
          </center>
        </div>
      </div>
    </div>
  </div>
);
function CarouselFun() {
  return (
    <div style={{ backgroundColor: "#ffe4b5" }}>
      <Carousel data-bs-theme="dark" className="d-block w-100">
      <Carousel.Item style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{ ...imgStyle, opacity: 0.6 }} // Set opacity for the image
        />

        <Carousel.Caption
          style={{
            textAlign: "center",
            color: "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 1.0, // Set opacity for the text
          }}
        >
          <b>
            <i>
              <h1 style={{ color: "black", fontSize: "2.5em", opacity: 1.0 }}>
              Your Dream Wedding Awaits
              </h1>
            </i>
          </b>
          <br></br>

          <strong> <h6 style={{ color: "black", fontSize: "1.2em", opacity: 0.8 }}>
          Create magical moments with Tie The Knot. Our dedicated team
              ensures your wedding day is as special as your love story.
          </h6></strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
          style={{ ...imgStyle, opacity: 0.6 }} // Set opacity for the image
        />

        <Carousel.Caption
          style={{
            textAlign: "center",
            color: "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 1.0, // Set opacity for the text
          }}
        >
          <b>
            <i>
              <h1 style={{ color: "black", fontSize: "2.5em", opacity: 1.0 }}>
              Unforgettable Moments
              </h1>
            </i>
          </b>
          <br></br>

          <strong> <h6 style={{ color: "black", fontSize: "1.2em", opacity: 0.8 }}>
          Cherish every moment with our expert planning and seamless
              execution. Your wedding, your way.
          </h6></strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src={image3}
          alt="First slide"
          style={{ ...imgStyle, opacity: 0.6 }} // Set opacity for the image
        />

        <Carousel.Caption
          style={{
            textAlign: "center",
            color: "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 1.0, // Set opacity for the text
          }}
        >
          <strong>
            <i>
              <h1 style={{ color: "black", fontSize: "2.5em", opacity: 1.0 }}>
              Memorable Celebrations
              </h1>
            </i>
            </strong>
          <br></br>
          <strong>  <h6 style={{ color: "black", fontSize: "1.2em", opacity: 0.8 }}>
          Craft your dream wedding with personalized details, elegant
              decor, and a celebration that reflects your unique style.
          </h6></strong>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      <br />

      <center>
        <h1>Featured Wedding Venues</h1>
      </center>
      <div className="container mt-5 mb-4" style={{ backgroundColor: "#ffe4b5" }}>
        <div className="row">
          <CourseCard
          externalImgLink="https://cdn0.weddingwire.in/vendor/2232/3_2/320/jpg/ameena-palace-function-hall5_15_92232-1568624636.webp" 
            //imgSrc={image1}
            title="GCC Hotel and Club"
            description="GCC Hotel and Club is amidst the 3-star hotels in the city of Mumbai which provides best-in-class services to its clients. From 1933, since its establishment, it has been amazing the residents of Thane, with its classy service and luxurious interiors. "
            btnColor="#9900cc" // Set your hex color code here
          />
          <CourseCard
            externalImgLink="https://cdn0.weddingwire.in/vendor/2572/3_2/320/png/image-4_15_92572.webp" 
            //imgSrc={image1}
            title="The Leela, Mumbai"
            description="The Leela Mumbai is an ideal choice if you are planning a five-star wedding celebration. Located in an accessible position from the airport, railway station, and all the major centres, this magnificent hotel provides easy access and offers."
            btnColor="#9900cc" // Set your hex color code here
          />
          <CourseCard
            externalImgLink="https://cdn0.weddingwire.in/vendor/5214/3_2/320/png/special-for-your-event_v1.webp" 
            //imgSrc={image1}
            title="The Palace Halls, Worli"
            description="The Palace Halls is Mumbai's finest venue that offers you a stunning space right in the heart of the city to host all kinds of edding functions with your loved ones. Spread over combined 16000 square feet, combined with open air space."
            btnColor="#9900cc" // Set your hex color code here
          />
        </div>
      </div>

      <center>
        <h1>Featured Photography Services</h1>
      </center>
      <div className="container mt-5 mb-4" style={{ backgroundColor: "#ffe4b5" }}>
        <div className="row">
          <CourseCard
            externalImgLink="https://cdn0.weddingwire.in/vendor/7083/3_2/320/jpg/-dsc6117_15_217083-167841661228066.webp" 
            //imgSrc={image1}
            title="Wedpro Photography"
            description="Wedpro Photography is a photography service located in the city of West Delhi. Choosing the right photographer is one of the main tasks while planning a perfect wedding as they transform your precious moments into memories to cherish for a lifetime."
            btnColor="#9900cc" // Set your hex color code here
          />
          <CourseCard
           externalImgLink="https://cdn0.weddingwire.in/vendor/3696/3_2/320/jpg/mpp-0394_15_453696-169141668133290.webp" 
           // imgSrc={image1}
            title="Anubhav Film"
            description="Anubhav Film is a wedding photography and videography service based in Varanasi. Weddings are one of a kind. They happen once in a lifetime which makes them a milestone for an event which is a unique and memorable event. "
            btnColor="#9900cc" // Set your hex color code here
          />
          <CourseCard
            externalImgLink="https://cdn0.weddingwire.in/vendor/3651/3_2/320/jpg/img-6965_15_363651-166573585062362.webp" 
            //imgSrc={image1}
            title="Fab Photowork"
            description="Fab Photowork, based in Delhi, specialises in capturing special moments of nuptial celebrations in vibrant and entertaining pictures. They offer photography and videography, including pre-and post-wedding picture shoots."
            btnColor="#9900cc" // Set your hex color code here
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselFun;
