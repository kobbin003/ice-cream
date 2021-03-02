import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const ToppingOptions = ({ name, path, optionType, updateItemCount }) => {
  const [selected, setSelected] = useState(false);
  const handleCheckboxClick = (e) => {
    setSelected(!selected);
    // console.log("topping-checkbox", e.target.value);
  };
  useEffect(() => {
    if (selected) {
      updateItemCount(name, 1, optionType);
    } else {
      updateItemCount(name, 0, optionType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
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
          alt={`${name} topping`}
          className="w-75"
        />
        <Form>
          <Form.Group controlId={`${name}-count`} as={Row}>
            <Form.Label column xs="6" className="text-right">
              {name}
            </Form.Label>
            <Col xs="5" className="text-left">
              <Form.Check
                type="checkbox"
                onClick={handleCheckboxClick}
                value={selected}
                // checked={selected}
                // defaultChecked={selected}
                // value={selected}
                defaultChecked={selected}
                aria-checked={selected}
              />
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </div>
  );
};

export default ToppingOptions;
