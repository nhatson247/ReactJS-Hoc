import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import "./Login.scss";
import * as actions from "../../store/actions";
import { handleLoginApi } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errMessage: "",
      showPassword: false,
    };
  }

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });

    try {
      let data = await handleLoginApi(this.state.email, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleLogin();
    }
  };

  render() {
    const { email, password, errMessage } = this.state;

    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content">
            <div className="col-12 text-center text-login">LOGIN</div>
            <div className="col-12 text-center text-login-pl">
              Please enter your login and password!
            </div>
            <div className="col-12 form-group login-input">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={this.handleOnChangeInput}
                onKeyDown={this.handleKeyDown}
              ></input>
            </div>
            <div className="col-12 form-group login-input">
              <div className="custom-input-password">
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleOnChangeInput}
                  onKeyDown={this.handleKeyDown}
                />
                <span onClick={this.toggleShowPassword}>
                  <i
                    className={
                      this.state.showPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12 form-group text-porgot">
              <a href="home">Forgot password?</a>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {errMessage}
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                LOGIN
              </button>
            </div>
            <div className="col-12 text-center">
              <span className="login-with">Login with:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google google"></i>
              <i className="fab fa-facebook facebook"></i>
              <i className="fab fa-github github"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
