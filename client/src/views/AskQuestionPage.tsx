import React, { useState } from "react";

export default function AskQuestionPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function sendQuestion() {
    const response = await fetch("http://localhost:3000/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
    const data = await response.json();
    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <h2 className="text-3xl mb-4">Ask a question on TechHub</h2>

      <label htmlFor="Title">Title</label>
      <textarea
        id="Title"
        className="bg-gray-100 border p-1 w-full min-h-[50px]"
        placeholder="Your title"
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>

      <label htmlFor="Description">Description</label>
      <textarea
        id="Description"
        className="bg-gray-100 border p-1 w-full min-h-[200px]"
        placeholder="Your description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button
        onClick={() => sendQuestion()}
        className="py-1 px-2 bg-[#0a95ff] text-white rounded ml-auto hover:opacity-80"
      >
        Ask question
      </button>
    </div>
  );
}
