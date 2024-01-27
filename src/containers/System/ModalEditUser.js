import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModerEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "harcode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
  }

  toggle = () => {
    this.props.togglefromparent();
  };

  handlOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValideInput = () => {
    let kt = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        kt = false;
        alert("Missing parameter " + arrInput[i]);
        break;
      }
    }
    return kt;
  };

  handSaveUser = () => {
    let kt = this.checkValideInput();
    if (kt) {
      this.props.editUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Edit a new user
        </ModalHeader>
        <ModalBody>
          <div className="model-user-body">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  this.handlOnChangeInput(event, "email");
                }}
                value={this.state.email}
                disabled
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  this.handlOnChangeInput(event, "password");
                }}
                value={this.state.password}
                disabled
              />
            </div>
            <div className="input-container">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                placeholder="First Name"
                onChange={(event) => {
                  this.handlOnChangeInput(event, "firstName");
                }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                placeholder="Last Name"
                onChange={(event) => {
                  this.handlOnChangeInput(event, "lastName");
                }}
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-width-input">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                placeholder="Address"
                onChange={(event) => {
                  this.handlOnChangeInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              this.handSaveUser();
            }}
          >
            Save Change
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModerEditUser);
