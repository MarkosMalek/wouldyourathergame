import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export default function Erorr() {
  return (
    <div className="container">
      <Card style={{ width: "25em" }}>
        <Card.Header>An Error Happend Please Go Back</Card.Header>
        <Button as={Link} to="/login">
          back
        </Button>
      </Card>
    </div>
  );
}
