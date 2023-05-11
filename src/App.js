import { Route, Routes } from "react-router";
import { Cards, HomePage } from "./Pages/index";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/tweets" element={<Cards />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
