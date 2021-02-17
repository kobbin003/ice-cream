import React from "react";
import ReactDOM from "react-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
const PopoverComponent = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
  return ReactDOM.createPortal(
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>,
    <div></div>
  );
};

export default PopoverComponent;
