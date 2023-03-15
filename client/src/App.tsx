import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import QuestionPage from "./views/QuestionPage";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
      </Routes>
    </div>
  );
}
