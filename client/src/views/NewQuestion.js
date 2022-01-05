import React, { Component } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addNewQuestion } from "../redux/actions/shared";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleClick() {
    const question = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      author: this.props.authenticatedUser,
    };
    this.props.dispatch(addNewQuestion(question));
  }
  render() {
    return (
      <div className="container">
        <Card style={{ width: "20em", marginTop: "2%" }}>
          <Card.Header style={{ display: "flex", fontSize: "1.5em" }}>
            Create New Question
          </Card.Header>
          <Form style={{ padding: "2%" }}>
            <Form.Label
              style={{ display: "flex", color: "rgba(0, 0, 0, 0.451)" }}
            >
              complete the Question
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Label style={{ display: "flex", fontSize: "1.2em" }}>
                would you rather ...
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OptionOne Text Here"
                onChange={(e) => this.setState({ optionOne: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Or</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter OptionTwo Text Here"
                onChange={(e) => this.setState({ optionTwo: e.target.value })}
              />
            </Form.Group>
          </Form>
          <Button onClick={() => this.handleClick()}>Add Question</Button>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ authenticate }) {
  return {
    authenticatedUser: authenticate.state,
  };
}
export default connect(mapStateToProps)(NewQuestion);
