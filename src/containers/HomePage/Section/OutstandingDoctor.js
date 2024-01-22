import React, { Component } from "react";
import { connect } from "react-redux";
import "./Common.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class OutstandingDoctor extends Component {
  render() {
    return (
      <div className="section-common section-Outstanding-Doctor">
        <div className="common-container">
          <div className="common-header">
            <span>Bác sĩ nổi bật</span>
            <button className="header-button">Xem thêm</button>
          </div>
          <div className="common-body Outstanding-Doctor-body">
            <Slider {...this.props.settings}>
              <div className="common-customsize customsize-Outstanding-Doctor">
                <div className="bg-img section-Outstanding-Doctor"></div>
                <div className="customsize-title">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </div>
                <span>Da liễu</span>
              </div>
              <div className="common-customsize customsize-Outstanding-Doctor">
                <div className="bg-img section-Outstanding-Doctor"></div>
                <div className="customsize-title">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </div>
                <span>Da liễu</span>
              </div>
              <div className="common-customsize customsize-Outstanding-Doctor">
                <div className="bg-img section-Outstanding-Doctor"></div>
                <div className="customsize-title">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </div>
                <span>Da liễu</span>
              </div>
              <div className="common-customsize customsize-Outstanding-Doctor">
                <div className="bg-img section-Outstanding-Doctor"></div>
                <div className="customsize-title">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </div>
                <span>Da liễu</span>
              </div>
              <div className="common-customsize customsize-Outstanding-Doctor">
                <div className="bg-img section-Outstanding-Doctor"></div>
                <div className="customsize-title">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </div>
                <span>Da liễu</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
