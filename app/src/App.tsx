import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ScanPage from "./pages/ScanPage";
import StockItemPage from "./pages/StockItemPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/scan" element={<ScanPage />} />
      <Route path="/stock-item" element={<StockItemPage />} />
    </Routes>
  );
}

export default App;
