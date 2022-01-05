import React from "react";
import { Card, Figure, Row, Col, ProgressBar } from "react-bootstrap";
import { connect } from "react-redux";

function QuestionAnswer(props) {
  const question = props.questions.filter(
    (q) => q.id === props.match.params.id
  );
  const user = props.users.filter((user) => user.id === question[0].author);
  const answer = () => {
    if (question[0].optionOne.votes.length > 0) {
      if (question[0].optionOne.votes.indexOf(props.authenticatedUser) >= 0) {
        return "optionOne";
      } else return "optionTwo";
    } else return "optionTwo";
  };

  return (
    <div className="container">
      <Card style={{ width: "auto", marginBottom: "15%", marginTop: "2%" }}>
        <Card.Header style={{ display: "flex", fontSize: "1.5em" }}>
          Asked By {user[0].name}
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={5}>
              <Figure>
                <Figure.Image
                  roundedCircle
                  style={{ width: "12em", marginTop: "13%" }}
                  src={user[0].avatarURL}
                  className="container"
                />
              </Figure>
            </Col>
            <Col xs={1}>
              <div className="vLine"></div>
            </Col>
            <Col xs={6}>
              <h2
                style={{
                  display: "flex",
                }}
              >
                Results:
              </h2>
              <Card
                className={answer() === "optionOne" && "activeQuestion"}
                style={{
                  marginBottom: "10%",
                }}
              >
                {answer() === "optionOne" && (
                  <img
                    alt="activeTag"
                    src="/attachment_96694118.png"
                    className={"activeAvatar"}
                  />
                )}
                <Card.Text>
                  Would You Rather {question[0].optionOne.text} ?
                </Card.Text>
                <div>
                  <ProgressBar
                    now={
                      (question[0].optionOne.votes.length /
                        props.users.length) *
                      100
                    }
                    label={`${Math.round(
                      (question[0].optionOne.votes.length /
                        props.users.length) *
                        100
                    )}%`}
                    style={{ height: "1.8em" }}
                  />
                </div>
                <Card.Text>
                  {`${question[0].optionOne.votes.length} out of ${props.users.length} Votes`}
                </Card.Text>
              </Card>
              <Card
                className={answer() === "optionTwo" && "activeQuestion"}
                style={{
                  marginBottom: "10%",
                }}
              >
                {answer() === "optionTwo" && (
                  <img
                    alt="activeTag"
                    src="/attachment_96694118.png"
                    className={"activeAvatar"}
                  />
                )}
                <Card.Text>
                  Would You Rather {question[0].optionTwo.text} ?
                </Card.Text>
                <div>
                  <ProgressBar
                    now={
                      (question[0].optionTwo.votes.length /
                        props.users.length) *
                      100
                    }
                    label={`${Math.round(
                      (question[0].optionTwo.votes.length /
                        props.users.length) *
                        100
                    )}%`}
                    style={{ height: "1.8em" }}
                  />
                </div>
                <Card.Text>
                  {`${question[0].optionTwo.votes.length} out of ${props.users.length} Votes`}
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
function mapStateToProps({ questions, authenticate, users }) {
  return {
    users: authenticate ? Object.entries(users).map((user) => user[1]) : null,
    questions: authenticate
      ? Object.entries(questions).map((question) => question[1])
      : null,
    authenticatedUser: authenticate ? authenticate.state : null,
  };
}
export default connect(mapStateToProps)(QuestionAnswer);
