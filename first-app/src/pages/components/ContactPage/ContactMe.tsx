import React from "react";

export default function ContactComponent() {
  return (
    <div className="form-main">
      <div className="main-wrapper">
        <h2 className="form-head">Contact Me</h2>
        <form className="form-wrapper">
          <div className="form-card">
            <input className="form-input" type="text" name="full_name" />
            <label className="form-label" htmlFor="full_name">
              Full Name
            </label>
          </div>

          <div className="form-card">
            <input className="form-input" type="email" name="email" />
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="form-card">
            <input className="form-input" type="number" name="phone_number" />
            <label className="form-label" htmlFor="phone_number">
              Phone number
            </label>
          </div>

          <div className="form-card">
            <textarea className="form-textarea" name="phone_number"></textarea>
            <label className="form-textarea-label" htmlFor="phone_number">
              Description
            </label>
          </div>
          <div className="btn-wrap">
            <button> Submit </button>
          </div>
        </form>
      </div>
    </div>
  );
}
