import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.scss";
import { FormattedMessage } from "react-intl";
class slider extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-slider">
          <div className="slider-container">
            <div className="slider-header">
              <span>
                <FormattedMessage id="slider-banner.title" />
              </span>
            </div>
            <div className="slider-body">
              <div className="option">
                <div className="option-slider">
                  <img
                    src={require("../../../assets/images/icon/KCK.png").default}
                    alt="Khám Chuyên khoa"
                  />
                </div>
                <span>
                  <FormattedMessage id="slider-banner.speciality" />
                </span>
              </div>
              <div className="option">
                <div className="option-slider">
                  <img
                    src={require("../../../assets/images/icon/KTX.png").default}
                    alt="Khám từ xa"
                  />
                </div>
                <span>
                  <FormattedMessage id="slider-banner.Remote-Examination" />
                </span>
              </div>
              <div className="option">
                <div className="option-slider">
                  <img
                    src={require("../../../assets/images/icon/KTQ.png").default}
                    alt="Khám tổng quát"
                  />
                </div>
                <span>
                  <FormattedMessage id="slider-banner.General-Examination" />
                </span>
              </div>
              <div className="option">
                <div className="option-slider">
                  <img
                    src={
                      require("../../../assets/images/icon/XNYH.png").default
                    }
                    alt="Xét nghiệm y học"
                  />
                </div>
                <span>
                  <FormattedMessage id="slider-banner.Medical-Tests" />
                </span>
              </div>
              <div className="option">
                <div className="option-slider">
                  <img
                    src={
                      require("../../../assets/images/icon/SKTT.png").default
                    }
                    alt="Sức khỏe tinh thần"
                  />
                </div>
                <span>
                  <FormattedMessage id="slider-banner.Mental-Health" />
                </span>
              </div>
              <div className="option">
                <div className="option-slider">
                  <img
                    src={require("../../../assets/images/icon/NK.png").default}
                    alt="Khám nha khoa"
                  />
                </div>
                <span>
                  <FormattedMessage id="slider-banner.Dental-Examination" />
                </span>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(slider);
