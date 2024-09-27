import { useState } from "react";
import "./App.css";
import ServiceList from "./pages/ServiceList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddService from "./pages/AddService";
import EditServiceList from "./pages/EditServiceList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ServiceList />} />
          <Route path="/edit/:id" element={<EditServiceList />} />
          <Route path="/addService" element={<AddService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
