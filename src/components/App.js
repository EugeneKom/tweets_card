import { Cards, HomePage } from "../Pages/index";
import { Route, Routes } from "react-router";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<Cards />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
