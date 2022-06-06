
import React from "react";
import { Card, Col,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate();
  const handleBuyNow = id =>{
    navigate(`/services/${id}`);
  }
  return (
    <Col>
      <Card className="p-4">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h3>${price}</h3>
          <Card.Text>
            {description.slice(0,105)}
          </Card.Text>
        </Card.Body>
        <Button className="w-50 d-block text-center" onClick={()=>handleBuyNow(id)}>Buy Now</Button>
      </Card>
      
    </Col>
  );
};

export default Service;
