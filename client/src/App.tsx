import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import QuestionPage from "./views/QuestionPage";
import SideBar from "./components/SideBar";
import AskQuestionPage from "./views/AskQuestionPage";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className=" flex max-w-4xl mx-auto py-4 gap-20">
        <SideBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/questions/:id" element={<QuestionPage />} />
            <Route path="/ask-question" element={<AskQuestionPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
