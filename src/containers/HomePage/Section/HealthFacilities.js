import React, { Component } from "react";
import { connect } from "react-redux";
import "./Common.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HealthFacilities extends Component {
  render() {
    return (
      <div className="section-common">
        <div className="common-container">
          <div className="common-header">
            <span>Cơ sở y tế</span>
            <button className="header-button">Xem thêm</button>
          </div>
          <div className="common-body">
            <Slider {...this.props.settings}>
              <div className="common-customsize customsize-health-facilities">
                <div className="bg-img section-health-facilities"></div>
                <div className="customsize-title customsize-title-health-facilities">
                  Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội
                  108
                </div>
              </div>
              <div className="common-customsize customsize-health-facilities">
                <div className="bg-img section-health-facilities"></div>
                <div className="customsize-title customsize-title-health-facilities">
                  Bệnh viện chợ Rẫy
                </div>
              </div>
              <div className="common-customsize customsize-health-facilities">
                <div className="bg-img section-health-facilities"></div>
                <div className="customsize-title customsize-title-health-facilities">
                  Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội
                  108
                </div>
              </div>
              <div className="common-customsize customsize-health-facilities">
                <div className="bg-img section-health-facilities"></div>
                <div className="customsize-title customsize-title-health-facilities">
                  Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội
                  108
                </div>
              </div>
              <div className="common-customsize customsize-health-facilities">
                <div className="bg-img section-health-facilities"></div>
                <div className="customsize-title customsize-title-health-facilities">
                  Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội
                  108
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
