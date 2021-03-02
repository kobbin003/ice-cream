import { createContext, useMemo, useState, useEffect, useContext } from "react";
import unitPrice from "../constants/price";
const OrderDetails = createContext();

/** create custom hook to check whether we are inside a provider */
export const useOrderDetails = () => {
  const context = useContext(OrderDetails);
  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }
  return context;
};

/** create a function to calculate the subtotals */
const calculateSubTotal = (optionType, optionCounts) => {
  // const subtotal = optionCounts.get(optionType) * unitPrice;
  let subtotal = 0;
  // optionCounts[optionType].forEach(
  //   (key, value) => (subtotal += value * unitPrice)
  // );
  // OR
  for (const iterator of optionCounts[optionType].values()) {
    subtotal += iterator * unitPrice(optionType);
  }
  return subtotal;
};
/** forma the price to */
const formatNumber = (price) => {
  return price.toFixed(2);
};
/** customProvider with a state */
const CustomOrderDetailProvider = (props) => {
  // const [orderState, setOrderState] = useState({
  //   scoops: { items: [], count: 0, subtotal: 0 },
  //   toppings: { items: [], count: 0, subtotal: 0 },
  //   grandTotal: 0,
  // });
  /** count of scoops and toppings i.e GETTER*/
  // getter: object containing option counts for scoops and toppings, subtotals and totals
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });
  const [totals, setTotals] = useState({
    scoops: formatNumber(0),
    toppings: formatNumber(0),
    grandTotal: formatNumber(0),
  });
  /** update totals whenever optionCounts state changes */
  useEffect(() => {
    const scoops = calculateSubTotal("scoops", optionCounts);
    const toppings = calculateSubTotal("toppings", optionCounts);
    const grandTotal = scoops + toppings;
    const newTotal = {
      scoops: formatNumber(scoops),
      toppings: formatNumber(toppings),
      grandTotal: formatNumber(grandTotal),
    };
    setTotals(newTotal);
  }, [optionCounts]);
  const value = useMemo(() => {
    /** update the counts of scoops and toppings */
    // setter: updateOptionCount
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = optionCounts[optionType].set(
        itemName,
        parseInt(newItemCount)
      );
      setOptionCounts({ ...optionCounts, ...newOptionCounts });
    }

    return [{ ...optionCounts, totals }, updateItemCount];
  }, [optionCounts, totals]);
  // ???? WHY MEMO???
  return (
    <OrderDetails.Provider value={value} {...props}></OrderDetails.Provider>
  );
};
export default CustomOrderDetailProvider;
