import React from "react";

function Header() {
  return (
    <>
      <div className="container">
        <header>
          <div className="row text-center">
            <div className="col-12 col-md-2 col-lg-3 col-xl-3">
              <h1>STVDY</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-6 spans">
              <span>Browser</span>
              <span>Bootcamps</span>
              <span>How It Works</span>
              <span>Testemonial</span>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-3">
              <button>About Us</button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
