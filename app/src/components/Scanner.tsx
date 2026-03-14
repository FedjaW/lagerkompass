import { Card, CardContent } from "@/components/ui/card";
import BarcodeScanner from "react-qr-barcode-scanner";

type ScannerProps = {
  onScanned: (barcode: string) => void;
};

function Scanner({ onScanned }: ScannerProps) {
  return (
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <BarcodeScanner
          width={600}
          height={600}
          onUpdate={(_, result) => {
            if (result) onScanned(result.getText());
          }}
        />
      </CardContent>
    </Card>
  );
}

export default Scanner;
