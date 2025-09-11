import { Routes, Route, Navigate } from "react-router-dom";
import PagesHandler from "@/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/careers"} element={<PagesHandler />} />
        <Route path="/" element={<Navigate to="/careers" replace />} />
      </Routes>
    </>
  );
}

export default App;
