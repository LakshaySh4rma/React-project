import React from "react";

function RegistrationForm() {
  return (
    <div className="container my-4">
      <h4 className="text-center mb-4">Registration Form</h4>

      <div className="card shadow p-4">
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name*</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Gender*</label>
              <input type="text" className="form-control" placeholder="Gender" />
            </div>
          </div>

          <hr />

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Date of Birth*</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Father Name*</label>
              <input type="text" className="form-control" placeholder="Father Name" />
            </div>
          </div>

          <hr />

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Profession</label>
              <input type="text" className="form-control" placeholder="Profession" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Blood Group</label>
              <input type="text" className="form-control" placeholder="Blood Group" />
            </div>
          </div>

          <hr />

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">State*</label>
              <input type="text" className="form-control" placeholder="State" />
            </div>
            <div className="col-md-6">
              <label className="form-label">District*</label>
              <input type="text" className="form-control" placeholder="District" />
            </div>
          </div>

          <hr />

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Mobile No*</label>
              <input type="text" className="form-control" placeholder="Mobile" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Whatsapp No</label>
              <input type="text" className="form-control" placeholder="Whatsapp" />
            </div>
          </div>

          <hr />

          <div className="mb-3">
            <label className="form-label">Address*</label>
            <textarea className="form-control" rows="2"></textarea>
          </div>

          <hr />

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Pin Code*</label>
              <input type="text" className="form-control" placeholder="Pincode" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
          </div>

          <hr />

          <div className="mb-3">
            <label className="form-label">Profile Picture*</label>
            <input type="file" className="form-control" />
          </div>

          <hr />

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Select Your ID</label>
              <input type="file" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Other Document</label>
              <input type="file" className="form-control" />
            </div>
          </div>

          <hr />

          <div className="text-center">
            <button className="btn btn-primary px-5">REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;