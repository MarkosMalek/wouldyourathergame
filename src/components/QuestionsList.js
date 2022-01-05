import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionsList extends Component {
  render() {
    return (
      <div style={{ padding: "4.1%" }}>
        {this.props.questions.map((q) => (
          <Question
            key={q.id}
            question={q}
            isAnswered={this.props.isAnswered}
            user={this.props.users.filter((user) => user.id === q.author)}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ authenticate, users }, { isAnswered }) {
  return {
    users: authenticate ? Object.entries(users).map((user) => user[1]) : null,
    authentedUser: authenticate ? authenticate.state : null,
    isAnswered,
  };
}
export default connect(mapStateToProps)(QuestionsList);
