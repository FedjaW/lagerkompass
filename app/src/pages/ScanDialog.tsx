import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScanBarcode } from "lucide-react";
import Scanner from "../components/Scanner";
import { useState } from "react";

export function ScanDialog() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleBarcodeScanned = (barcode: string) => {
    setOpen(false);
    navigate("/stock-item", {
      state: { barcode: barcode },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm">
            <ScanBarcode />
            Scan
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Scan Barcode</DialogTitle>
            <DialogDescription>
              Scanne den Barcode oder QR-Code indem du die Kamera mittig auf den
              Code richtest.
            </DialogDescription>
          </DialogHeader>
          <Scanner onScanned={handleBarcodeScanned} />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Abbrechen</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
