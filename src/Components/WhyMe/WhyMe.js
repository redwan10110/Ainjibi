import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img from "../../Images/lawyer.png";
import './WhyMe.css';
const WhyMe = () => {
  return (
    <div className="bg-light pt-4">
      <h2 className="text-center text-dark my-4">Why You Should Hire Me?</h2>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-7">
            <Row xs={1} md={2} className="g-4">
                <Col>
                  <Card className="card">
                  <h2 className="text-center my-3"><i className="fa-solid fa-scale-balanced"></i></h2>
                    <Card.Body>
                      <Card.Title className="text-center">Exclusively Areas</Card.Title>
                      <Card.Text>
                      Improve himmr believe opinion offered amemet and endmi cheered forbade mrnendly asem des stronge speedily by recurred on interest.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="card">
                    <h2 className="text-center my-3"><i className="fa-solid fa-gavel"></i></h2>
                    <Card.Body>
                      <Card.Title>Experts in Law</Card.Title>
                      <Card.Text>
                      Improve himmr believe opinion offered amemet and endmi cheered forbade mrnendly asem des stronge speedily by recurred on interest
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="card">
                    <h2 className="text-center my-3"><i className="fa-solid fa-square-poll-vertical"></i></h2>
                    <Card.Body>
                      <Card.Title>Cases Results</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="card">
                    <h2 className="text-center my-3"><i className="fa-solid fa-ranking-star"></i></h2>
                    <Card.Body>
                      <Card.Title>Always Win Case</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </div>
          <div className="col-md-5">
            <img src={img} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
