import React from "react";
import { Col } from "react-bootstrap";

const ScoopOptions = ({ name, path }) => {
  return (
    <div>
      <Col xs={12} md={8} lg={6} xl={3} className="text-center">
        <img
          src={`http://localhost:3030/${path}`}
          alt={`${name} scoop`}
          className="w-75"
        />
      </Col>
    </div>
  );
};

export default ScoopOptions;
