import React from "react";
import "./Styles.css";
class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      msgTitle: "",
      description: "",
      formErrors: {},
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleUserInput(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({ [name]: value });
  // }
  // validateField(fieldName, value) {
  //   const fieldValidationErrors = this.state.formErrors;
  //   let userNameValid = this.state.userNameValid;
  //   let emailValid = this.state.emailValid;
  //   let msgTitleValid = this.state.msgTitleValid;
  //   let descriptionValid = this.state.descriptionValid;

  //   switch (fieldName) {
  //     case "email":
  //       emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //       fieldValidationErrors.email = emailValid ? "" : " is invalid";
  //       break;
  //     case "userName":
  //       userNameValid = value.length >= 6;
  //       fieldValidationErrors.userName = userNameValid ? "" : " is too short";
  //       break;
  //     case "msgTitle":
  //       msgTitleValid = value.length >= 6;
  //       fieldValidationErrors.msgTitle = msgTitleValid ? "" : " is too short";
  //       break;
  //     case "description":
  //       descriptionValid = value.length >= 6;
  //       fieldValidationErrors.description = descriptionValid
  //         ? ""
  //         : " is too short";
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState(
  //     {
  //       formErrors: fieldValidationErrors,
  //       userNameValid,
  //       emailValid,
  //       msgTitleValid,
  //       descriptionValid,
  //     },
  //     this.validateForm
  //   );
  // }

  handleChangeInputName(event) {
    this.setState({ userName: event.target.value });
  }

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  handleChangeInputEmail(event) {
    if (this.validateEmail(event.target.value)) {
      this.setState({
        email: event.target.value,
        formErrors: { ...this.state.formErrors, email: null },
      });
    } else {
      this.setState({
        formErrors: { ...this.state.formErrors, email: "Email is not valid" },
      });
    }
  }
  handleChangeInputMsgTitle(event) {
    this.setState({ msgTitle: event.target.value });
  }
  handleChangeInputDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    alert("Thanks " + this.state.userName + " for contacting us!");
    event.preventDefault();
  }

  render() {
    return (
      <form className="demoForm" onSubmit={this.handleSubmit}>
        <h2>Contact Us</h2>
        <div className="form-group">
          {/* <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div> */}
          <div>
            <label>Name</label>
            <input
              name="userName"
              className="form-control"
              type="text"
              onChange={(event) => this.handleChangeInputName(event)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              className="form-control"
              type="text"
              onChange={(event) => this.handleChangeInputEmail(event)}
            />
            {this.state.formErrors.email && (
              <div>{this.state.formErrors.email}</div>
            )}
          </div>
          <div>
            <label>Message Title</label>
            <input
              name="msgTitle"
              className="form-control"
              type="text"
              onChange={(event) => this.handleChangeInputMsgTitle(event)}
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
              onChange={(event) => this.handleChangeInputDescription(event)}
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
  }
}
export default ContactUs;
