import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, Container, Button, Row, Col } from "react-bootstrap";
import { getUsers } from "../redux/actions/users";
import { logIn } from "../redux/actions/authUser";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    selected: "choose a user",
  };
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(logIn(this.state.selected));
    console.log(this.state.selected);
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ selected: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <Container>
          <Row xs={12} className="container">
            <Col xs="auto" className="my-1" size="lg">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {this.state.selected}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.props.users.map((user) => (
                    <Dropdown.Item
                      as={Button}
                      value={user}
                      key={user}
                      onClick={(e) => this.handleChange(e)}
                    >
                      {user}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs="auto" className="my-1">
              <Dropdown.Item as={Button} onClick={(e) => this.handleSubmit(e)}>
                <Button variant="danger" as={Link} to="/">
                  Submit
                </Button>
              </Dropdown.Item>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ users, authenticate }) {
  return { users: Object.keys(users), authenticate };
}
export default connect(mapStateToProps)(Login);