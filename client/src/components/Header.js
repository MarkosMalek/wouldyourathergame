import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Container, Figure, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logOut } from "../redux/actions/authUser";

function Header(props) {
  const handleClick = (e) => {
    props.dispatch(logOut());
  };

  const authentedUser = props.users.filter(
    (user) => user.id === props.authentedUserId
  );

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
            <div style={{ display: "flex", marginRight: "2%", width: "15em" }}>
              <Navbar.Text style={{ marginRight: "5%" }}>
                Hello,<strong> {authentedUser[0].name}</strong>
              </Navbar.Text>
              <Figure.Image
                roundedCircle
                src={authentedUser[0].avatarURL}
                width="30"
                height="30"
                alt={authentedUser[0].name + " image"}
              />
            </div>

            <Nav.Item style={{ marginRight: "10%" }}>
              <Button
                size="sm"
                variant="danger"
                as={Link}
                to="/login"
                onClick={(e) => handleClick(e)}
              >
                Log Out
              </Button>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function mapStateToProps({ authenticate, users }) {
  return {
    authenticate,
    users: authenticate ? Object.entries(users).map((user) => user[1]) : null,
    loggedIn: authenticate === null,
    authentedUserId: authenticate ? authenticate.state : null,
  };
}
export default connect(mapStateToProps)(Header);
