import React from "react";
import image1 from "./Image/venue1.jpg";



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

const WeddingVendors = () => {
  return (
    <div style={{ backgroundColor: "#F2AFEF" }}>
    <div className="container  mb-4" style={{ backgroundColor: "#F2AFEF" }}>
      <br></br>
      <center><b><h1>Wedding Photographers</h1></b></center>
      <br></br>
      <div className="row">
        
        <CourseCard
        externalImgLink="https://cdn0.weddingwire.in/vendor/7083/3_2/320/jpg/-dsc6117_15_217083-167841661228066.webp" 
          //imgSrc={image1}
          title="Wedpro Photography"
          description="Wedpro Photography is a photography service located in the city of West Delhi. Choosing the right photographer is one of the main tasks while planning a perfect wedding as they transform your precious moments into memories to cherish for a lifetime."
          btnColor="#9900cc"
        />
        <CourseCard
        externalImgLink="https://cdn0.weddingwire.in/vendor/6964/3_2/320/jpg/dpr06347_15_6964-167869171897831.webp" 
          //imgSrc={image1}
          title="Anubhav Film"
          description="Anubhav Film is a wedding photography and videography service based in Varanasi. Weddings are one of a kind. They happen once in a lifetime which makes them a milestone for an event which is a unique and memorable event. "
          btnColor="#9900cc"
        />
        <CourseCard
        externalImgLink="https://cdn0.weddingwire.in/vendor/3526/3_2/320/jpg/7_15_73526-167824310390588.webp" 
          //imgSrc={image1}
          title="Fab Photowork"
          description="Fab Photowork, based in Delhi, specialises in capturing special moments of nuptial celebrations in vibrant and entertaining pictures. They offer photography and videography, including pre-and post-wedding picture shoots."
          btnColor="#9900cc"
        />
      </div>
      <br></br>
    
      <div className="row">
      <br></br>
      <center><b><h1>Wedding Caterers</h1></b></center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <CourseCard
        externalImgLink="https://cdn0.weddingwire.in/vendor/1701/3_2/320/jpg/14577603-xl_15_71701.webp" 
         // imgSrc={image1}
          title="Food Town Catering Services"
          description="Food Town Catering Services is a catering service provider located near the new Tungarli Road in Lonavala. The most significant and relevant aspect of a wedding ceremony is the meal, as it marks the culmination of a successful celebration."
          btnColor="#9900cc"
        />
        <CourseCard
        externalImgLink="https://cdn0.weddingwire.in/vendor/5156/3_2/320/jpg/catere_15_85156.webp" 
          //imgSrc={image1}
          title="Sahani Caterers"
          description="Sahani Caterers specialise in catering and event planning for all occasions and is based in the city of Mumbai. They have over ten years of industry experience and a passion for making your event memorable. "
          btnColor="#9900cc"
        />
        <CourseCard
        externalImgLink="https://cdn0.weddingwire.in/vendor/2969/3_2/320/jpeg/catering-chandan-catering-catering-setup-1_15_362969-161401514475839.webp" 
          //imgSrc={image1}
          title="Wedding Wonderz Catering"
          description="Wedding Wonderz Catering is a catering service based in the city of Bhubaneswar. An initiative by a professional cook who is known for customer's comfort and he will make sure to give you the most perfect catering settings. "
          btnColor="#9900cc"
        />
      </div>
    </div>
    </div>
  );
};

export default WeddingVendors;
