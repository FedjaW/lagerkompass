import { useLocation } from "react-router-dom";

function StockItemPage() {
  const { state } = useLocation();
  const { barcode } = state;
  return <div>{barcode}</div>;
}

export default StockItemPage;
