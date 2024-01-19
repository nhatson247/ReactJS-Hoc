import React, { Component } from "react";
import { connect } from "react-redux";
import "./HealthFacilities.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HealthFacilities extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className="section-healthfacilities">
        <div className="healthfacilities-container">
          <div className="healthfacilities-header">
            <span>Cơ sở y tế</span>
            <button className="header-button">Xem thêm</button>
          </div>
          <div className="healthfacilities-body">
            <Slider {...settings}>
              <div className="healthfacilities-customsize">
                <div className="bg-img"></div>
                <div className="customsize-title">
                  Phòng khám Bệnh viện Đại học Y Dược 1
                </div>
              </div>
              <div className="healthfacilities-customsize">
                <div className="bg-img"></div>
                <div className="customsize-title">
                  Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội
                  108
                </div>
              </div>
              <div className="healthfacilities-customsize">
                <div className="bg-img"></div>
                <div className="customsize-title">
                  Phòng khám Bệnh viện Đại học Y Dược 3
                </div>
              </div>
              <div className="healthfacilities-customsize">
                <div className="bg-img"></div>
                <div className="customsize-title">
                  Phòng khám Bệnh viện Đại học Y Dược 4
                </div>
              </div>
              <div className="healthfacilities-customsize">
                <div className="bg-img"></div>
                <div className="customsize-title">
                  Phòng khám Bệnh viện Đại học Y Dược 5
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthFacilities);
