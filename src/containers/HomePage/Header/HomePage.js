import React, { Component } from "react";

import { connect } from "react-redux";
import HomHeader from "./HomHeader";
import Specialty from "../Section/Specialty";
import Slider from "../Slider/Slider";
import Healthfacilities from "../Section/HealthFacilities";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HomHeader />
        <Slider />
        <Specialty />
        <Healthfacilities />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
