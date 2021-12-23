import React from "react";
import { Figure, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Question({ question, users }) {
  return (
    <div>
      <Card style={{ width: "25em", marginBottom: "15%" }}>
        <Card.Header>{question.author} Ask's : </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Figure>
                <Figure.Image
                  roundedCircle
                  width={70}
                  height={70}
                  alt="171x180"
                  src={
                    users.filter((user) => user.id === question.author)[0]
                      .avatarURL
                  }
                />
              </Figure>
            </Col>

            <Col>
              <Card.Text>Would You Rather ?</Card.Text>
              <Card.Text>
                {question.optionOne.text.substr(0, 10) + "..."}
              </Card.Text>
            </Col>
            <Button as={Link} to={`/Question/:${question.id}`}>
              View Question
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
