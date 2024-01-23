import React, { Component } from "react";
import { connect } from "react-redux";
import "./Common.scss";
class About extends Component {
  render() {
    return (
      <div className="section-common section-about">
        <div className="section-about-header">
          Truyền thông nói về BookingCare
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="340px"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <div className="customsize-content">
              <div className="content-img"></div>
            </div>
            <div className="customsize-content">
              <div className="content-img"></div>
            </div>
            <div className="customsize-content">
              <div className="content-img"></div>
            </div>
            <div className="customsize-content">
              <div className="content-img"></div>
            </div>
            <div className="customsize-content">
              <div className="content-img"></div>
            </div>
            <div className="customsize-content">
              <div className="content-img"></div>
            </div>
            <div className="customsize-content">
              <div className="content-img"></div>
            </div>
            <div className="customsize-content">
              <div className="content-img"></div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
