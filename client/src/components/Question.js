import React from "react";
import { Figure, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Question({ question, user, isAnswered }) {
  return (
    <div>
      <Card style={{ width: "25em", marginBottom: "10%" }}>
        <Card.Header>{user[0].name} Ask's : </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4}>
              <Figure>
                <Figure.Image
                  roundedCircle
                  width={70}
                  height={70}
                  src={user[0].avatarURL}
                />
              </Figure>
            </Col>
            <Col xs={1}>
              <div className="vLine"></div>
            </Col>
            <Col xs={5}>
              <Card.Text>Would You Rather ?</Card.Text>
              <Card.Text>
                {question.optionOne.text.substr(0, 10) + "..."}
              </Card.Text>
            </Col>
            <Button
              variant="info"
              as={Link}
              to={
                !isAnswered
                  ? `/Question/${question.id}`
                  : `/Question/${question.id}/answer`
              }
            >
              View Question
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
