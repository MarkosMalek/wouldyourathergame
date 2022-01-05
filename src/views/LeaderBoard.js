import React from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Figure } from "react-bootstrap";

function LeaderBoard(props) {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user[1].id} className="container" style={{ marginTop: "2%" }}>
          <Card style={{ minWidth: "490px" }}>
            <div
              className={
                props.users.indexOf(user) === 0
                  ? "gold"
                  : props.users.indexOf(user) === 1
                  ? "silver"
                  : "pronze"
              }
            >
              {props.users.indexOf(user) === 0
                ? "G"
                : props.users.indexOf(user) === 1
                ? "S"
                : "P"}
            </div>
            <Card.Body>
              <Row>
                <Col xs={3}>
                  <Figure>
                    <Figure.Image
                      roundedCircle
                      width={70}
                      height={70}
                      src={user[1].avatarURL}
                    />
                  </Figure>
                </Col>

                <Col xs={6}>
                  <div className="vLine" style={{ paddingLeft: "10%" }}>
                    <Card>
                      <Card.Header
                        style={{
                          display: "flex",
                        }}
                      >
                        {user[1].name}
                      </Card.Header>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5%",
                        }}
                      >
                        <Card.Text>Answered Questions</Card.Text>
                        <Card.Text>
                          {Object.keys(user[1].answers).length}
                        </Card.Text>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5%",
                        }}
                      >
                        <Card.Text>Created Questions</Card.Text>
                        <Card.Text>{user[1].questions.length}</Card.Text>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col xs={3}>
                  <div className="vLine" style={{ paddingLeft: "20%" }}>
                    <Card>
                      <Card.Header>Score</Card.Header>
                      <div>
                        {user[1].questions.length +
                          Object.keys(user[1].answers).length}
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users: Object.entries(users).sort((a, b) => {
      return (
        b[1].questions.length +
        Object.keys(b[1].answers).length -
        (a[1].questions.length + Object.keys(a[1].answers).length)
      );
    }),
  };
}
export default connect(mapStateToProps)(LeaderBoard);
