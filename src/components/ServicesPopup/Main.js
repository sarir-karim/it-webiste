import React, { Component } from "react";
import PageOne from "./PageOne";
import PageThree from "./PageThree";
import PageTwo from "./PageTwo";
import SuccessPage from "./SuccessPage";

export default class Main extends Component {
  state = {
    step: 1,
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    country: "",
    levelOfEducation: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { email, username, password, firstName, lastName, country, levelOfEducation } = this.state;
    const values = { email, username, password, firstName, lastName, country, levelOfEducation }

    switch (step) {
      case 1:
        return (
          <PageOne
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PageTwo
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <PageThree
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <SuccessPage />;
      default:
      //    do nothing
    }
  }
}
