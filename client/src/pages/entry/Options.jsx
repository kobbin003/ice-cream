/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";
import { Alert, Row } from "react-bootstrap";
import AlertBanner from "../common/AlertBanner";
import { Fragment } from "react";
import unitPrice from "../../constants/price";
import { useOrderDetails } from "../../contexts/OrderDetails";
const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  /** using context */
  const [{ totals }, updateItemCount] = useOrderDetails();
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
  }, []);

  if (errorMessage) return <AlertBanner message={errorMessage} />;

  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  const pricing = unitPrice(optionType);
  const subTotal = totals[optionType];

  return (
    <Fragment>
      <h2>{title}</h2>
      <p>${pricing} each</p>
      <p>
        {title} total: $ {subTotal}
      </p>
      <Row>
        {items.map((item, index) => (
          <ItemComponent
            key={index}
            name={item.name}
            path={item.imagePath}
            updateItemCount={updateItemCount}
            optionType={optionType}
          />
        ))}
      </Row>
    </Fragment>
  );
};

export default Options;
