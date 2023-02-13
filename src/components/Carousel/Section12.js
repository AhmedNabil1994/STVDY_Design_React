import React from "react";
import CarouselCard from "./CarouselCard";
import CarouselComp from "./CarouselComp";

function Section12() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center section-12">
          <div className="col-12 col-md-12 col-lg-6 section-12-left">
            <CarouselComp
              id="carouselExampleCaptions"
              card={<CarouselCard />}
            />
          </div>
          <div className="col-12 col-md-12 col-lg-6 section-12-right">
            <h2>Grow Your Business and Join Our Happy Users</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Inventore Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Inventore
            </p>
            <button>About Us</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section12;
