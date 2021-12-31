import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, ListGroup, Tab } from "react-bootstrap";
import { getQuestions } from "../redux/actions/quistions";
import QuestionsList from "../components/QuestionsList";
class Home extends Component {
  questionOfEveryOneElse = this.props.questions.filter(
    (q) => q.author !== this.props.authentedUser
  );
  unasnweredQuestionsOptionOne = this.questionOfEveryOneElse
    .map((q) =>
      q.optionOne.votes.map((voteArrs) =>
        voteArrs !== this.props.authentedUser ? q : null
      )
    )
    .map((q) => (q.length > 0 ? q[0] : null))
    .filter((ele) => ele);
  unasnweredQuestionsOptionTwo = this.questionOfEveryOneElse
    .map((q) =>
      q.optionTwo.votes.map((voteArrs) =>
        voteArrs !== this.props.authentedUser ? q : null
      )
    )
    .map((q) => (q.length > 0 ? q[0] : null))
    .filter((ele) => ele);
  unasnweredQuestions = this.unasnweredQuestionsOptionOne.concat(
    this.unasnweredQuestionsOptionTwo
  );
  asnweredQuestionsOptionOne = this.questionOfEveryOneElse
    .map((q) =>
      q.optionOne.votes.map((voteArrs) =>
        voteArrs === this.props.authentedUser ? q : null
      )
    )
    .map((q) => (q.length > 0 ? q[0] : null))
    .filter((ele) => ele);
  asnweredQuestionsOptionTwo = this.questionOfEveryOneElse
    .map((q) =>
      q.optionTwo.votes.map((voteArrs) =>
        voteArrs === this.props.authentedUser ? q : null
      )
    )
    .map((q) => (q.length > 0 ? q[0] : null))
    .filter((ele) => ele);
  asnweredQuestions = this.asnweredQuestionsOptionOne.concat(
    this.asnweredQuestionsOptionTwo
  );

  render() {
    return (
      <div
        className="container"
        style={{
          width: "29em",
          flexDirection: "column",
          marginTop: "3%",
        }}
      >
        <Tab.Container defaultActiveKey="#unAnswered">
          <Col sm={12}>
            <ListGroup horizontal>
              <ListGroup.Item action href="#unAnswered">
                unAnswered
              </ListGroup.Item>
              <ListGroup.Item action href="#Answered">
                Answered
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="#unAnswered">
                <QuestionsList
                  questions={[...new Set(this.unasnweredQuestions)]}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#Answered">
                <QuestionsList
                  questions={[...new Set(this.asnweredQuestions)]}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </div>
    );
  }
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
export default connect(mapStateToProps)(Home);
