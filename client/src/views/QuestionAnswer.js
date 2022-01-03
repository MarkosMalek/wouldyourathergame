import React from "react";
import { Button } from "react-bootstrap";

export default function QuestionAnswer(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.history.push("/");
  };
  return (
    <div>
      <Button onClick={(e) => handleClick(e)}>return home</Button>
    </div>
  );
}
