/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";
import { Alert, Row } from "react-bootstrap";
import AlertBanner from "../common/AlertBanner";
const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const config = {
      method: "get",
      url: `http://localhost:3030/${optionType}`,
    };
    axios(config)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO
        // console.error(error);
        setErrorMessage(error.response.data.errorMessage);
      });
    return () => {};
  }, []);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;
  // if (errorMessage) return <AlertBanner />;
  if (errorMessage) return <AlertBanner message={errorMessage} />;
  return (
    <div>
      {/* <h2>{optionType}</h2>
      <p>${optionType === "scoops" ? "2.00" : "1.50"} each</p>
      <p></p> */}
      <Row>
        {items.map((item, index) => (
          <ItemComponent key={index} name={item.name} path={item.imagePath} />
        ))}
      </Row>
    </div>
  );
};

export default Options;
