import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, ListGroup, Tab } from "react-bootstrap";
import { getQuestions } from "../redux/actions/quistions";
import QuestionsList from "../components/QuestionsList";
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions());
  }
  unAnsered = this.props.questions.filter(
    (q) => q.author !== this.props.authentedUser
  );

  ansered = this.props.questions.filter(
    (q) => q.author !== this.props.authentedUser
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
                <QuestionsList />
              </Tab.Pane>
              <Tab.Pane eventKey="#Answered">Answered</Tab.Pane>
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
