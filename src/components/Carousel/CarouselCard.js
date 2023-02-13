import React from "react";
import cardImage from "../../resources/card_image";
import star from "../../resources/star.png";

function CarouselCard() {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={cardImage}
              className="img-fluid rounded-start rounded-3 card-image"
              alt="Card Image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Florrie Jacobs</h5>
              <p className="card-text">CEO of Company</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                saepe repellendus, est enim porro eos provident
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselCard;
