import React, { Component } from "react";
import { connect } from "react-redux";
class HomeFooter extends Component {
  render() {
    return (
      <div className="homefooter">
        <p>
          &copy; 2024 nhatson247@gmail.com More information, please visit my
          Contact:
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100010759565346&locale=vi_VN"
            rel="noreferrer"
          >
            Facebook
          </a>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
