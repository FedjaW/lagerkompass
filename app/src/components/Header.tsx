import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScanBarcode } from "lucide-react";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  const onScanClick = () => {
    navigate("/scan");
  };

  return (
    <header className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
      <h1 className="m-0 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h1>
      <Button variant="ghost" size="sm" onClick={onScanClick}>
        <ScanBarcode />
        Scan
      </Button>
    </header>
  );
}

export default Header;
