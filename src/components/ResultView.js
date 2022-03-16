import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { foods } from "../constants";

const ResultView = ({ userFoodUrl, setView, setArgs, foodId }) => {
  const food = foodId ? foods[foodId] : foods[0];
  return (
    <div>
      <Col xs={12}>
        <Image maxHeight="30px" src={userFoodUrl} />
      </Col>
      <Col xs={12} className="mt-5 mb-3">
        <Card>
          <Card.Body>
            <h1>BAD FOOD</h1>
            <p>{food.text}</p>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ResultView;
