import React, { Component } from "react";
import { connect } from "react-redux";
import "./Common.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Handbook extends Component {
  render() {
    return (
      <div className="section-common section-handbook">
        <div className="common-container">
          <div className="common-header hand-book-header">
            <span>Cẩm nang</span>
            <button className="header-button">Xem thêm</button>
          </div>
          <div className="common-body">
            <Slider {...this.props.settings}>
              <div className="common-customsize customsize-hand-book">
                <div className="bg-img section-handbook"></div>
                <div className="customsize-title">
                  Bảng giá xét nghiệm NIPT tại Hệ thống Medlatec Hà Nội và TPHCM
                  1
                </div>
              </div>
              <div className="common-customsize customsize-hand-book">
                <div className="bg-img section-handbook"></div>
                <div className="customsize-title">
                  Bảng giá xét nghiệm NIPT tại Hệ thống Medlatec Hà Nội và TPHCM
                  2
                </div>
              </div>
              <div className="common-customsize customsize-hand-book">
                <div className="bg-img section-handbook"></div>
                <div className="customsize-title">
                  Bảng giá xét nghiệm NIPT tại Hệ thống Medlatec Hà Nội và TPHCM
                  3
                </div>
              </div>
              <div className="common-customsize customsize-hand-book">
                <div className="bg-img section-handbook"></div>
                <div className="customsize-title">
                  Bảng giá xét nghiệm NIPT tại Hệ thống Medlatec Hà Nội và TPHCM
                  4
                </div>
              </div>
              <div className="common-customsize customsize-hand-book">
                <div className="bg-img section-handbook"></div>
                <div className="customsize-title">
                  Bảng giá xét nghiệm NIPT tại Hệ thống Medlatec Hà Nội và TPHCM
                  5
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
