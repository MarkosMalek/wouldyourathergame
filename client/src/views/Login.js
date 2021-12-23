import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, Container, Button, Row, Col, Card } from "react-bootstrap";
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
  handleSubmit() {
    this.props.dispatch(logIn(this.state.selected));
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ selected: e.target.value });
  };

  render() {
    return (
      <div className="container" style={{ flexDirection: "column" }}>
        <div className="container">
          <h2>You Are Not Logged In</h2>
        </div>

        <Card
          style={{
            width: "25em",
            marginTop: "3%",
            paddingButtom: "1%",
          }}
        >
          <Card.Header> Choose A User</Card.Header>
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
                <Dropdown.Item as={Button} onClick={() => this.handleSubmit()}>
                  <Button
                    variant="danger"
                    as={Link}
                    to={
                      this.state.selected === "choose a user" ? "/error" : "/"
                    }
                  >
                    Log in
                  </Button>
                </Dropdown.Item>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users: Object.keys(users) };
}
export default connect(mapStateToProps)(Login);
