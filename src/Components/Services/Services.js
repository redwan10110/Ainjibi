import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "./Service/Service";

const Services = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center text-dark my-5">Services</h2>
      <Row xs={1} md={3} className="g-4">
        {
            services.map(service=><Service
            key={service.id}
            service={service}
            ></Service>)
        }
      </Row>
    </div>
  );
};

export default Services;
