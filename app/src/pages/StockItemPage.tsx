import { ItemMedia } from "@/components/ui/item";
import { useLocation } from "react-router-dom";
import handyImg from "../assets/handyhalter.jpg";

function StockItemPage() {
  const { state } = useLocation();
  const { barcode } = state;
  return <>{findItemByBarcode(barcode)}</>;
}

function findItemByBarcode(barcode: string) {
  if (barcode === "Maike") {
    return (
      <ItemMedia variant="image" style={{ width: "20%", height: "20%" }}>
        <img src={handyImg} alt="Kein Foto" />
      </ItemMedia>
    );
  }
  if (barcode === "123456789") {
    return (
      <ItemMedia variant="image" style={{ width: "20%", height: "20%" }}>
        <img src={handyImg} alt="Kein Foto" />
      </ItemMedia>
    );
  }
}

export default StockItemPage;
