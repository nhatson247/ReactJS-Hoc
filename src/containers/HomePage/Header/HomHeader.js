import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage, injectIntl } from "react-intl";
import { LANGUAGES } from "../../../utils";
import { changeLanguageApp } from "../../../store/actions/appActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {} from "react-intl";
class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };

  render() {
    const { language, intl } = this.props;
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <img
                className="header-logo"
                src={require("../../../assets/images/Logo.png").default}
                alt="logo"
              />
            </div>
            <div className="center-content">
              <div className="child-content active">
                <FormattedMessage id="header-container.child1" />
              </div>
              <div className="child-content">
                <FormattedMessage id="header-container.child2" />
              </div>
              <div className="child-content">
                <FormattedMessage id="header-container.child3" />
              </div>
              <div className="child-content">
                <FormattedMessage id="header-container.child4" />
              </div>
              <div className="search-container">
                <i className="fas fa-search"></i>
                <input
                  className="child-content-search"
                  type="search"
                  placeholder={intl.formatMessage({
                    id: "search.placeholder",
                  })}
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="header-container.child5" />
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi action"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en action"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>

        <Slider {...settings} className="home-header-banner">
          <div className="banner-customsize">
            <div className="bg-img"></div>
          </div>
          <div className="banner-customsize">
            <div className="bg-img"></div>
          </div>
          <div className="banner-customsize">
            <div className="bg-img"></div>
          </div>
          <div className="banner-customsize">
            <div className="bg-img"></div>
          </div>
        </Slider>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(HomeHeader));
