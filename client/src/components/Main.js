import React from "react";
import first_image from '../images/about_2.jpg'
import second_image from '../images/hero_1.jpg'
import "./main.css";

const Main = () => {
  return (
    <div className="mt-0">
      <div className="container text-center  pt-5 pb-5">
        <h3 className="font-weight-bold">BANK SMARTLY & RESPONSIBLY</h3>
      </div>

      

      <div className="row text-center container pt-5 ">
        <div className="col-xl-6">
          <img
            src={first_image}
            className="card-img-top mb-3"
            alt="banker"
          />
        </div>
        <div className="col-xl-6 text-justify">
          <h3 className="pb-3 font-weight-bold">AMORTIZATION COMPUTATION</h3>
          <p className="small">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.A small river named Duden flows by their
            place and supplies it with the necessary regelialia.A small river
            named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
          <a href="/" className=" btn-blue small">Learn More</a>
        </div>
      </div>

      <div className="row container text-justify pt-5">
        <div className="col-xl-6">
          <div className="mb-5">
            <h3 className="font-weight-bold">BANK LOANS</h3>
            <p className="small">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <a href="/" className="small btn-blue">
              {" "}
              Learn more{" "}
            </a>
          </div>
          <div>
            <h3 className="font-weight-bold">BANKING CONSULTATION</h3>
            <p className="small">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <a href="/" className="small btn-blue">
              {" "}
              Learn more{" "}
            </a>
          </div>
        </div>
        <div className="col-xl-6 mt-3">
          <img
            src={second_image}
            className="card-img-top mb-3"
            alt="banker"
          />
        </div>
      </div>

      <div className="bg-light">
        <div className="p-5">
          <h3 className="font-weight-bold">JOIN OUR COMMUNITY</h3>
          <button className="btn btn-green shadow">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
