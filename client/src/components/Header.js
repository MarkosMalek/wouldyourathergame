import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logOut } from "../redux/actions/authUser";

function Header(props) {
  const handleClick = (e) => {
    props.dispatch(logOut());
  };
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="/" as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/newQuestion" as={Link} to="/newQuestion">
                New Question
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/leaderboard" as={Link} to="/leaderboard">
                Leader Board
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:<strong> {props.authentedUser}</strong>
            </Navbar.Text>
            <Nav.Item>
              <Nav.Link
                eventKey="/logout"
                as={Link}
                to="/login"
                onClick={(e) => handleClick(e)}
              >
                Log Out
              </Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function mapStateToProps({ authenticate }) {
  return {
    loggedIn: authenticate === null,
    authentedUser: authenticate ? authenticate.state : null,
  };
}
export default connect(mapStateToProps)(Header);
