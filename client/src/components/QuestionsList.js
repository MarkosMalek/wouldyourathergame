import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionsList extends Component {
  render() {
    return (
      <div style={{ padding: "5%" }}>
        {this.props.questions.map((q) => (
          <Question key={q.id} question={q} users={this.props.users} />
        ))}
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
export default connect(mapStateToProps)(QuestionsList);
