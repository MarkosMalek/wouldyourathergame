import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/quistions";
import Question from "../components/Question";

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
      <div>
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
export default connect(mapStateToProps)(Home);
