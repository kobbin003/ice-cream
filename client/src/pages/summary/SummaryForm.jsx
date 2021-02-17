import React, { useState, useRef } from "react";
import { Form, Button, OverlayTrigger, Popover } from "react-bootstrap";
// import PopoverComponent from "./Popover";
const SummaryForm = () => {
  const [checked, setChecked] = useState(false);
  const tooltip = useRef(null);
  const handleCheckboxClick = (e) => {
    console.log("checkbox-target", e.target.checked);
    setChecked(e.target.checked);
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );
  const checkboxLabel = () => (
    <p>
      I agree To{" "}
      <OverlayTrigger
        // trigger="hover"
        placement="right"
        overlay={popover}
        className="text-primary"
      >
        <span className="text-primary">Terms and Conditions</span>
      </OverlayTrigger>
    </p>
  );
  return (
    <div ref={tooltip.current}>
      <Form>
        <Form.Group>
          <Form.Check
            type="checkbox"
            id="enable-order"
            defaultChecked={checked}
            onClick={handleCheckboxClick}
            label={checkboxLabel()}
          />
          {/* <Form.Label htmlFor="enable-order">
            I agree to Terms and Conditions
          </Form.Label> */}
        </Form.Group>
        <Button variant="warning" type="submit" disabled={!checked}>
          Confirm Order
        </Button>
      </Form>
    </div>
  );
};

export default SummaryForm;
