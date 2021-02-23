import React from "react";
import { Alert } from "react-bootstrap";
const AlertBanner = ({ message, variant }) => {
  const alertMessage = message || "default message";
  const alertVariant = variant || "danger";
  return <Alert variant={alertVariant}>{alertMessage}</Alert>;
};

export default AlertBanner;
