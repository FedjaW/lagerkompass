import { ScanDialog } from "../pages/ScanDialog";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
      <h1 className="m-0 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h1>
      <ScanDialog />
    </header>
  );
}

export default Header;
