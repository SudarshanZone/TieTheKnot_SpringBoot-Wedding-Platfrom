import React from "react";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center">
      {/* Grid container */}
      <div className="container p-4">
        {/* Section: Images */}
        <section className="">
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  data-mdb-ripple-init
                  className="bg-image hover-overlay shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src={`https://mdbcdn.b-cdn.net/img/new/fluid/city/11${index}.webp`}
                    className="w-100"
                    alt={`City ${index}`}
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ background: 'linear-gradient(#757575, #9E9E9E)' }}
                      ></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section: Images */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ background: 'linear-gradient(#757575, #F5F5F5)' }}
      >
        © 2023 Copyright:
          Tie The Knot{" "}
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
