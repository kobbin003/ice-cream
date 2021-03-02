import { Container } from "react-bootstrap";
import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm.jsx";
import OrderEntry from "./pages/entry/OrderEntry";
import CustomOrderDetailProvider from "./contexts/OrderDetails.jsx";
function App() {
  return (
    // <div className="App">
    //   <p>Sundae</p>
    //   <SummaryForm />
    // </div>
    <Container>
      <CustomOrderDetailProvider>
        {/* Summary page and entry page need provider */}
        <OrderEntry />
      </CustomOrderDetailProvider>
      {/* confirmation page does not need provider */}
    </Container>
  );
}

export default App;
