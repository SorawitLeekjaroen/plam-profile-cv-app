//สร้าง Component rfce,rfc,rafce,rafc
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import HomeUI from "./view/HomeUI";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
