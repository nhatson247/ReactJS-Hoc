import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../utils";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { FormattedMessage } from "react-intl";
import { adminMenu } from "./menuApp";
import "./Header.scss";

class Header extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    const { processLogout, language, userInfo } = this.props;
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="language">
          <span className="welcome">
            <FormattedMessage id="header-container.Welcome" />
            {userInfo.firstName && userInfo.lastName
              ? userInfo.firstName + " " + userInfo.lastName
              : ""}
          </span>
          <div
            className={
              language === LANGUAGES.VI ? "language-vi active" : "language-vi"
            }
          >
            <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
          </div>
          <div
            className={
              language === LANGUAGES.EN ? "language-en active" : "language-en"
            }
          >
            <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
          </div>
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="logout"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
        {/* nút logout */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) =>
      dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
