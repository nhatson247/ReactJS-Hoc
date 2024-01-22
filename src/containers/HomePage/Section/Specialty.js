import React, { Component } from "react";
import { connect } from "react-redux";
import "./Common.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Specialty extends Component {
  render() {
    return (
      <div className="section-common section-specialty">
        <div className="common-container">
          <div className="common-header">
            <span>Chuyên khoa</span>
            <button className="header-button">Xem thêm</button>
          </div>
          <div className="common-body">
            <Slider {...this.props.settings}>
              <div className="common-customsize">
                <div className="bg-img section-specialty"></div>
                <div className="customsize-title">Cơ xương khớp 1</div>
              </div>
              <div className="common-customsize">
                <div className="bg-img section-specialty"></div>
                <div className="customsize-title">Cơ xương khớp 2</div>
              </div>
              <div className="common-customsize">
                <div className="bg-img section-specialty"></div>
                <div className="customsize-title">Cơ xương khớp 3</div>
              </div>
              <div className="common-customsize">
                <div className="bg-img section-specialty"></div>
                <div className="customsize-title">Cơ xương khớp 4</div>
              </div>
              <div className="common-customsize">
                <div className="bg-img section-specialty"></div>
                <div className="customsize-title">Cơ xương khớp 5</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
