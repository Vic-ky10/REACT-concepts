import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./pages/Data";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Provider from "react-redux";

import Nav from "./Nav";
import store from "./store";

const Apps = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </Provider>-
            
  );
};

export default Apps;
