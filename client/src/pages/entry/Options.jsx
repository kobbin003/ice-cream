/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";
import { Row } from "react-bootstrap";
const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
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
      });
    return () => {};
  }, []);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;

  return (
    <Row>
      {items.map((item, index) => (
        <ItemComponent key={index} name={item.name} path={item.imagePath} />
      ))}
    </Row>
  );
};

export default Options;
