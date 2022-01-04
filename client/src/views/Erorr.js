import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Erorr() {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.goBack();
  };
  return (
    <div className="container">
      <Card style={{ width: "25em" }}>
        <Card.Header>An Error Happend Please Go Back</Card.Header>
        <Button onClick={(e) => handleClick(e)}>back</Button>
      </Card>
    </div>
  );
}
