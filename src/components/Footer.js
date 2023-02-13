import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 column-1">
            <h3>Study</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              expedita quibusdam voluptate inventore quae non, sit dicta itaque
              optio.
            </p>
          </div>
          <div className="col-12 col-md-4 column-2">
            <h6>Nos services</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              expedita quibusdam voluptate , sit dicta itaque
            </p>
          </div>
          <div className="col-12 col-md-4 column-3">
            <h6>Sign Up for Special Offers!</h6>
            <form action="">
              <input type="email" placeholder="Mail" />
              <span>Subscribe</span>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
