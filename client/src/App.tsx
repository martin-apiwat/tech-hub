import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions/:id" element={<div>hej från en fråga</div>} />
      </Routes>
    </div>
  );
}
