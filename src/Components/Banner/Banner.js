import React from "react";
import "./Banner.css";
import img1 from "../../Images/banner1.jpg";
import img2 from "../../Images/banner2.jpg";
import img3 from "../../Images/banner3.jpg";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{height:'90vh',width:'100vw'}}
          />
          <Carousel.Caption>
            <h3>Your Trusted Advocate</h3>
            <p>When you are facing a serious traffic violation, DWI, or another criminal accusation, your future hangs in the balance. Trust an attorney who gets results.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={img2}
            style={{height:'90vh',width:'100vw'}}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>I will Solve Your Legal Problem</h3>
            <p>Few things are as important as your future. When you are accused of a DWI, traffic violation, or crime, I will fight for you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            style={{height:'90vh',width:'100vw'}}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Skilled Advocacy,Trusted Advice</h3>
            <p>
            I offer free consultations, in person or over the phone, where an experienced legal professional will listen and provide you with the legal advice you need. Call today to schedule an appointment.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
