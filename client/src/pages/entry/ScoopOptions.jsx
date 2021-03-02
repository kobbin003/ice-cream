import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const ScoopOptions = ({ name, path, optionType, updateItemCount }) => {
  const handleInputChange = (e) => {
    updateItemCount(name, e.target.value, optionType);
  };
  return (
    <div>
      <Col
        xs={12}
        sm={8}
        md={6}
        lg={3}
        className="text-center d-flex flex-column"
      >
        <img
          src={`http://localhost:3030/${path}`}
          alt={`${name} scoop`}
          className="w-75"
        />
        <Form.Group as={Row} className="mt-1">
          {/* <Form.Label column xs="6" className="text-right"> */}
          <Form.Label htmlFor={optionType}>{name}</Form.Label>
          <Col className="text-left">
            <Form.Control
              id={optionType}
              type="number"
              defaultValue={0}
              min="0"
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
      </Col>
    </div>
  );
};

export default ScoopOptions;
