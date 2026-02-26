import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row align-items-center text-center text-lg-start">
          
          <div className="col-lg-3 mb-3 text-center">
            <img src="/logo.jpg.jpeg" alt="logo" style={{ maxHeight: "70px" }} />
          </div>

          <div className="col-lg-6 mb-3 text-center">
            <div className="mb-2">
              <a href="#" className="text-white mx-2">Terms</a>
              <a href="#" className="text-white mx-2">Privacy</a>
              <a href="#" className="text-white mx-2">Disclaimer</a>
              <a href="#" className="text-white mx-2">Refund</a>
            </div>
            <div>© 2021 All rights reserved. Manorama Foundation</div>
            <div>Section 8 Act 2013 Non-Profit Organization</div>
          </div>

          <div className="col-lg-3">
            <p>Corporate Office - Bihar, India</p>
            <p>www.manoramafoundation.org</p>
            <p>contact@manoramafoundation.org</p>
            <p>+91 9875624131</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;