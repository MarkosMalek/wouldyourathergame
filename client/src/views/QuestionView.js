import React from "react";
import { connect } from "react-redux";
import { Figure, Card, Row, Col, Button, Form } from "react-bootstrap";

function QuestionView(props) {
  const question = props.questions.filter(
    (q) => q.id === props.match.params.id
  );
  const user = props.users.filter((user) => user.id === question[0].author);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="container">
      <Card style={{ width: "35em", marginBottom: "15%", marginTop: "8%" }}>
        <Card.Header>{user[0].name} Ask's : </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4}>
              <Figure>
                <Figure.Image
                  roundedCircle
                  width={70}
                  height={70}
                  alt="171x180"
                  src={user[0].avatarURL}
                />
              </Figure>
            </Col>
            <Col xs={1}>
              <div className="vLine"></div>
            </Col>
            <Col xs={6}>
              <Form.Group>
                <h4>Would You Rather ?</h4>
                <Form.Check
                  style={{
                    display: "flex",
                  }}
                  name="answer"
                  type="radio"
                  label={question[0].optionOne.text}
                  value={question[0].optionOne.text}
                />

                <Form.Check
                  style={{
                    display: "flex",
                  }}
                  name="answer"
                  type="radio"
                  label={question[0].optionTwo.text}
                  value={question[0].optionTwo.text}
                />
                <Button onSubmit={(e) => handleSubmit(e)}>Submit</Button>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
function mapStateToProps({ authenticate, users, questions }) {
  return {
    questions: authenticate
      ? Object.entries(questions).map((question) => question[1])
      : null,
    users: authenticate ? Object.entries(users).map((user) => user[1]) : null,

    authentedUser: authenticate ? authenticate.state : null,
  };
}
export default connect(mapStateToProps)(QuestionView);
