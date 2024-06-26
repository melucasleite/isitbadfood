import React from "react";
import { RESULT_VIEW } from "../constants";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const DecideView = ({ userFoodUrl, setView, foods }) => {
  const food = foods[0];
  if (!food) {
    return <p>loading...</p>
  }
  return (
    <div>
      <Col xs={12} className="mt-5 mb-3">
        <Card>
          <Card.Body>
            <h2>{food.name}</h2>
            <Image src={food.image} />
            <Col xs={12} className="mt-5 mb-2">
              <Button className="btn btn-lg btn-danger mr-3">No</Button>
              <Button
                onClick={() => {
                  setView(RESULT_VIEW);
                }}
                className="btn btn-lg btn-success ml-3"
              >
                Yes
              </Button>
            </Col>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DecideView;
