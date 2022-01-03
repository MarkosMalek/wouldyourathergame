import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, ListGroup, Tab } from "react-bootstrap";
import QuestionsList from "../components/QuestionsList";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 500);
  }

  render() {
    return !this.state.loading ? (
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
                UN ANSWERED
              </ListGroup.Item>
              <ListGroup.Item action href="#Answered">
                ANSWERED
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="#unAnswered">
                {this.props.UnAnsweredQuestion.length > 0 ? (
                  <QuestionsList questions={this.props.UnAnsweredQuestion} />
                ) : (
                  <div>All Questions had been answered</div>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="#Answered">
                {this.props.asnweredQuestions.length > 0 ? (
                  <QuestionsList questions={this.props.asnweredQuestions} />
                ) : (
                  <div>No Question had been answered</div>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </div>
    ) : (
      <div>Loading</div>
    );
  }
}

function mapStateToProps({ authenticate, questions }) {
  return {
    UnAnsweredQuestion: Object.entries(questions)
      .map((question) => question[1])
      .filter((q) => q.author !== authenticate.state)
      .map((q) =>
        q.optionOne.votes.indexOf(authenticate.state) < 0 &&
        q.optionTwo.votes.indexOf(authenticate.state) < 0
          ? q
          : null
      )
      .filter((ele) => ele),
    asnweredQuestions: Object.entries(questions)
      .map((question) => question[1])
      .filter((q) => q.author !== authenticate.state)
      .map((q) =>
        q.optionOne.votes.indexOf(authenticate.state) >= 0 ||
        q.optionTwo.votes.indexOf(authenticate.state) >= 0
          ? q
          : null
      )
      .filter((ele) => ele),
    questions,
  };
}
export default connect(mapStateToProps)(Home);
