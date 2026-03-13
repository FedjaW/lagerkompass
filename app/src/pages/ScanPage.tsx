import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import BarcodeScanner from "react-qr-barcode-scanner";

function ScanPage() {
  const navigate = useNavigate();
  const handleBarcodeScanned = (barcode: string) => {
    navigate("/stock-item", {
      state: { barcode: barcode },
    });
  };

  return (
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <BarcodeScanner
          width={600}
          height={600}
          onUpdate={(_, result) => {
            if (result) handleBarcodeScanned(result.getText());
          }}
        />
      </CardContent>
    </Card>
  );
}

export default ScanPage;
