import React, { Component } from "react";

import { connect } from "react-redux";
import HomHeader from "./HomHeader";
import Specialty from "../Section/Specialty";
import Slider from "../Slider/Slider";
import Healthfacilities from "../Section/HealthFacilities";
import OutstandingDoctor from "../Section/OutstandingDoctor";
import Handbook from "../Section/Handbook";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "../Section/About";
import HomeFooter from "../HomeFooter";

class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <React.Fragment>
        <HomHeader />
        <Slider />
        <Specialty settings={settings} />
        <Healthfacilities settings={settings} />
        <OutstandingDoctor settings={settings} />
        <Handbook settings={settings} />
        <About />
        <HomeFooter />
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
