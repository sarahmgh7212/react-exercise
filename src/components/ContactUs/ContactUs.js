import React, { useState } from "react";
import "../Styles.css";
const ContactUs = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [msgTitle, setMsgTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleChangeInputName = (event) => {
    setUserName(event.target.value);
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChangeInputEmail = (event) => {
    if (validateEmail(event.target.value)) {
      setEmail(event.target.value);

      setFormErrors({ ...formErrors, email: null });
    } else {
      setEmail(setFormErrors({ ...formErrors, email: "Email is not valid" }));
    }
  };
  const handleChangeInputMsgTitle = (event) => {
    setMsgTitle(event.target.value);
  };
  const handleChangeInputDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Thanks " + email + " for contacting us!");
    event.preventDefault();
  };

  return (
    <form className="demoForm" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <div>
          <label>Name</label>
          <input
            name="userName"
            className="form-control"
            type="text"
            onChange={(event) => handleChangeInputName(event)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            className="form-control"
            type="text"
            onChange={(event) => handleChangeInputEmail(event)}
          />
          {formErrors.email && <div>{formErrors.email}</div>}
        </div>
        <div>
          <label>Message Title</label>
          <input
            name="msgTitle"
            className="form-control"
            type="text"
            onChange={(event) => handleChangeInputMsgTitle(event)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            id="description"
            cols="30"
            rows="8"
            onChange={(event) => handleChangeInputDescription(event)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-submit"
          // disabled={!this.state.formValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactUs;
