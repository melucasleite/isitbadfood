import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const CardIsBadFood = ({ badFoodUrl, userFoodUrl }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <Image maxHeight="30px" src={userFoodUrl} />
          </Col>
          <Col xs={12} className="mt-5 mb-3">
            <Image src={badFoodUrl} />
          </Col>
          <Col xs={12} className="mt-3 mb-3 bg-secondary pt-3 pb-2">
            <h4>Does your food look like this?</h4>
          </Col>
          <Col xs={12} className="mt-3">
            <Button className="btn btn-lg btn-danger mr-3">No</Button>
            <Button className="btn btn-lg btn-success ml-3">Yes</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardIsBadFood;
