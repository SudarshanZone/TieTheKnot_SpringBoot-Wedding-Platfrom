
import React from 'react';
import image1 from "./Image/venue1.jpg";
import image2 from "./Image/venue1.jpg";

import image3 from "./Image/venue1.jpg";

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

const WeddingVenues = () => {
  return (
    <div style={{ backgroundColor: "#F2AFEF" }}>
      <br></br>
      <center><b><h1>Wedding Venues in Mumbai</h1></b></center>
      <br></br>
    <div className="container mb-4">
      <div className="row">
        <CourseCard
         externalImgLink="https://cdn0.weddingwire.in/vendor/6578/3_2/320/jpg/solitaire_15_6578-163480366317861.webp" 
          //imgSrc={image1}
          title="GCC Hotel and Club"
          description="GCC Hotel and Club is amidst the 3-star hotels in the city of Mumbai which provides best-in-class services to its clients. From 1933, since its establishment, it has been amazing the residents of Thane, with its classy service and luxurious interiors. "
          btnColor="#9900cc"
        />
        <CourseCard
        externalImgLink="https://cdn0.weddingwire.in/vendor/8372/3_2/320/jpeg/whatsapp-image-2022-10-21-at-14-59-37_15_428372-166651885893934.webp" 
          //imgSrc={image1}
          title="The Leela, Mumbai"
          description="The Leela Mumbai is an ideal choice if you are planning a five-star wedding celebration. Located in an accessible position from the airport, railway station, and all the major centres, this magnificent hotel provides easy access and offers."
          btnColor="#9900cc"
        />
        <CourseCard
          externalImgLink="https://cdn0.weddingwire.in/vendor/7109/3_2/320/jpg/banquet-halls-the-palace-halls-event-space-5_15_317109-159266997988783.webp" 
          //imgSrc={image1}
          title="The Palace Halls, Worli"
          description="The Palace Halls is Mumbai's finest venue that offers you a stunning space right in the heart of the city to host all kinds of edding functions with your loved ones. Spread over combined 16000 square feet, combined with open air space."
          btnColor="#9900cc"
        />
      </div>
      <br></br>
      <div className="row">
      <br></br>
      <center><b><h1>Wedding Venues in Pune</h1></b></center>
      <br></br>
      <br>
      </br>
      <br></br>
      <br></br>
        <CourseCard
          externalImgLink="https://cdn0.weddingwire.in/vendor/0967/3_2/320/jpg/wedding-lawns-farmhouses-ramoji-film-city-event-space-8_15_320967-159510434382337.webp" 
          //imgSrc={image1}
          title="Ramoji Film City"
          description="Ramoji Film City is an ideal destination for dream weddings in Hyderabad. Renowned for its opulent wedding themes and sets, this venue features over five event spaces, both indoor and outdoor, solidifying its status"
          btnColor="#9900cc"
        />
        <CourseCard
          externalImgLink="https://cdn0.weddingwire.in/vendor/2676/3_2/320/png/weddingvenues-blue-sea-banquets-eventspace-6_15_422676-166270117769609.webp" 
          //imgSrc={image1}
          title="Laxmi Convention"
          description="Discover the enchanting world of Laxmi Convention, an idyllic haven in Medchal that transforms weddings into timeless celebrations. The quest for the perfect wedding venue is paramount."
          btnColor="#9900cc"
        />
        <CourseCard
          externalImgLink="https://cdn0.weddingwire.in/vendor/0174/3_2/320/jpeg/weddingvenue-dayanand-lawn-and-banquet-stagedecor-1_15_420174-166125325017286.webp" 
          //imgSrc={image1}
          title="The Coco Club"
          description="The Coco Club is a wedding venue located in Bangalore. Many things take place at a grand wedding function. One thing that elevates the ceremony's look is an elegant and fantastic venue."
          btnColor="#9900cc"
        />
      </div>
    </div>
    </div>
  );
};

export default WeddingVenues;